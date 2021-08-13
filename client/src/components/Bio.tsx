import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    smallerTitle: {
    },
    initialLetter: {
      fontSize: '160px'
    },
    titleWelcome: {
      fontSize: '80px'
    },
    bioBody: {
      padding: '20px'
    },
    highlited: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%)',
      backgroundSize: '200% auto',
      color: '#222',
      lineHeight: '1.15em',
      textDecoration: 'none',
      transition: 'background-position 0.5s ease-out',
      backgroundPosition: '-100% 0'
    },
    underlined: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 50%, #ddd 50%)',
      backgroundPosition: '-0% 0',
      backgroundSize: '200% auto',
      color: 'white',
      borderBottom: '1px solid #FFF',
      paddingBottom: '1px',
      transition: '0.5s ease-in-out',
    },
    endPhrase: {
      marginTop: "30px"
    }
  })
);

export default function Bio () {
  const {t} = useTranslation()
  // Use classes
  const classes = useStyles()
  const [highlited, setHightlited] = React.useState(false);
  
  // Return component
  return (
    <Box>
      <Typography variant="h1" component="h2" paragraph={true}>
        <span className={classes.initialLetter}>{t("BioC")}</span><span className={classes.titleWelcome}>{t("BioIao")}!</span>
      </Typography>
      <Box className={classes.bioBody}>
        <Typography variant="h4" component="h3" paragraph={true}>
          {t("Mi chiamo")}&nbsp;
          <span 
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            Luca Di Bello
          </span>
        </Typography>
        
        <Typography variant="h5" component="p" paragraph={true}>
          {t("BioFirstPhrase")}&nbsp;
          <span
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            {t("Bachelor in Ingegeria Informatica alla SUPSI")}
          </span>
        </Typography>

        <Typography variant="h5" component="p">
          <span
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            {t("Molte delle mie conoscenze sono state apprese da autoditatta")}
          </span>
          &nbsp;{t("tramite progetti personali e per terzi")}.
        </Typography>

        <Typography className={classes.endPhrase} variant="h5" component="p" paragraph={true}>
          {t("Dai un")}&nbsp;
          <span
            className={classes.smallerTitle + " " + (highlited ? classes.highlited: classes.underlined)}
            onMouseEnter={() => setHightlited(true)}
            onMouseLeave={() => setHightlited(false)}
          >
            {t("occhio ai miei progetti")}
          </span>
          &#33;
        </Typography>
      </Box>
    </Box>
  );
}
