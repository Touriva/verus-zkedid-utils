const { Hash160, UInt32, StructuredMemoString } = require('../data_types/index')
const { utf8ToHash160 } = require('../hash')
const { STRUCTURED_CLAIM } = require('../constants/index')

const claim_schemas = {
  [utf8ToHash160(STRUCTURED_CLAIM).toString('hex')]: [
    new Hash160('type'),
    new UInt32('version'),
    new StructuredMemoString('data'),
    new StructuredMemoString("to"),
  ]
}

const claim_strings = {
  [utf8ToHash160(STRUCTURED_CLAIM).toString('hex')]: STRUCTURED_CLAIM,
  [utf8ToHash160('covid19.health.claim:vrsc').toString('hex')]: 'covid19.health.claim:vrsc'
}

module.exports = {
  schemas: claim_schemas,
  strings: claim_strings
}