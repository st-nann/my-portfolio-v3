export function getFileFromStore(name: string, extension: string = 'png') {
  return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v3.appspot.com/o/${name}.${extension}?alt=media`
}
