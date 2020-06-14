/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x: number): boolean => {
  const initStr = String(x);
  const reversedStr = Array.from(initStr).reverse().join('');
  return initStr === reversedStr
};
export default isPalindrome;