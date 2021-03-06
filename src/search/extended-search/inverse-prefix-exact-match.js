// Token: !^fire
// Match type: inverse-prefix-exact-match
// Description: Items that do not start with `fire`

import Match from './match'

export default class InversePrefixExactMatch extends Match {
  constructor(pattern) {
    super(pattern)
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get literal() {
    return /^!\^"(.*)"$/
  }
  static get re() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern)

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      matchedIndices: [0, text.length - 1]
    }
  }
}
