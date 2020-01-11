export function getImageFromStore(name: string, token: string) {
  return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v2.appspot.com/o/${name}.png?alt=media&token=${token}`
}

export function getFileFromStore(
  name: string,
  extension: string,
  token: string
) {
  return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v2.appspot.com/o/${name}.${extension}?alt=media&token=${token}`
}
