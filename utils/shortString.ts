export const shortString = (str: string, max: number = 30) => {
  if (str.length > max) {
    return str.substring(0, max) + ' . . .'
  } else {
    return str
  }
}
