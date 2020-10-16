const { FIRST_TARGET } = require("../constants/config")
const { default: isAchieveTarget } = require("./isAchieveTarget")
const { default: splitCoordsFromString } = require("./splitCoordsFromString")

describe('Text isAchiveTarget func', () => {
  it('Shuld return correct boolean value', () => {
    const [lat, lon] = splitCoordsFromString(FIRST_TARGET)
    expect(isAchieveTarget('53.849748, 27.475909', { lat, lon })).toBe(true)
    expect(isAchieveTarget('53.849848, 27.475909', { lat, lon })).toBe(false)
    expect(isAchieveTarget('53.849748, 27.475810', { lat, lon })).toBe(true)
    expect(isAchieveTarget('53.849848, 27.476010', { lat, lon })).toBe(false)
  })
})