export default async function fetcher<T = any>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
