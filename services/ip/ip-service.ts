import { IpApiResponse } from "./service"

export async function getIpAddresses(): Promise<IpApiResponse> {
  return fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
