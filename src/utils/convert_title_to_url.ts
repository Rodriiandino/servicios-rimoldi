export default function convertTitleToURL(title: string) {
  let urlFriendlyString = title.trim().toLowerCase().replace(/\s+/g, '-')

  urlFriendlyString = urlFriendlyString.replace(/[^a-z0-9-]/g, '')

  return urlFriendlyString
}
