export const getRandomNumber = () => {
  return 2
}
// adding comment for testing "jest --findRelatedTests"

export const returnEvenNumbers = () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  return numberArray.filter(num => num % 2 === 0)
}
