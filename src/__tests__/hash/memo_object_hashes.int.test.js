const { 
  STRUCTURED_MEMO_IDENTIFIER_HASH,
  STRUCTURED_MEMO_IDENTIFIER,
  STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX
 } = require('../../utils/constants/index')
const { utf8ToHash160 } = require('../../utils/hash')

describe('Memo components hash verification', () => {
  it('Verifies that all hashes in the STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX match with their hash key', () => {
    Object.keys(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX).map(hashKey => {
      expect(utf8ToHash160(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX[hashKey]).toString('hex')).toEqual(hashKey)
    })
  })

  it('Verifies that the Structured Memo Identifier hash matches the Structured Memo Identifier', () => {
    expect(utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex')).toEqual(STRUCTURED_MEMO_IDENTIFIER_HASH)
  })
})