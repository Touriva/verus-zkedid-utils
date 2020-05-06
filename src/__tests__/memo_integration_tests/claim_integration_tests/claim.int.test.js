const VerusZkedidUtils = require('../../../index')

describe('Claim structured memo integration testing', () => {
  it('Can create and read a claim', () => {
    const memo = VerusZkedidUtils.StructuredMemo.writeMemo([VerusZkedidUtils.PresetObjects.Claim.create('covid19.health.claim:vrsc', 'test_data')])
    const memoObj = VerusZkedidUtils.StructuredMemo.readMemo(memo)
    
    expect(memoObj).toBeDefined()
  })
})
