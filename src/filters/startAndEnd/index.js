/**
 * startAndEnd function that takes a string and
 * shortens it
 * @param {String} str
 * @param {Number} start
 * @param {Number} end
 * @return {string}
 */
export default function (str, start = 6, end = 6) {
  return `${str.substr(0, start + 2)}…${str.substr(str.length - end, str.length)}`
}
