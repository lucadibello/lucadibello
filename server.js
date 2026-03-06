import "dotenv/config";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const app = express();

// ---------------------------------------------------------------------------
// Security headers (Helmet)
// ---------------------------------------------------------------------------
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          // Google Analytics
          "https://www.googletagmanager.com",
          "https://www.google-analytics.com",
          // Inline gtag bootstrap script — required by GA
          "'unsafe-inline'",
        ],
        styleSrc: [
          "'self'",
          // Google Fonts stylesheet
          "https://fonts.googleapis.com",
          // Tailwind injects inline styles via React
          "'unsafe-inline'",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: [
          "'self'",
          "data:",
          // GitHub avatars (used in JSON-LD / future use)
          "https://avatars.githubusercontent.com",
        ],
        connectSrc: [
          "'self'",
          "https://www.google-analytics.com",
          "https://analytics.google.com",
        ],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
    // Enforce HTTPS downstream (set to false if TLS is terminated at proxy)
    strictTransportSecurity: {
      maxAge: 63072000, // 2 years
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    crossOriginEmbedderPolicy: false, // would block Google Fonts otherwise
  })
);

// ---------------------------------------------------------------------------
// Rate limiting — protect against request flooding
// ---------------------------------------------------------------------------
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 120,            // max 120 requests per window per IP
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// ---------------------------------------------------------------------------
// Static assets + React Router request handler
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(
    "/assets",
    express.static("build/client/assets", {
      immutable: true,
      maxAge: "1y",
    })
  );
  app.use(express.static("build/client", { maxAge: "1h" }));
  app.use(
    createRequestHandler({
      build: await import("./build/server/index.js"),
    })
  );
} else {
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    })
  );
  app.use(viteDevServer.middlewares);
  app.use(
    createRequestHandler({
      build: () =>
        viteDevServer.ssrLoadModule("virtual:react-router/server-build"),
    })
  );
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
