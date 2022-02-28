export const shortString = (str: string) => {
  if (str.length > 30) {
    return str.substring(0, 30) + ' . . .'
  } else {
    return str
  }
}
