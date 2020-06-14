/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x: number): number => {
  let result = 0;
  while(x !== 0 ) {
    result = result * 10 + x % 10;
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
};
export default reverse;