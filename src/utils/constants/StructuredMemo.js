/* 
  This file holds all constants used in memo encoding/decoding. 
  
  DO NOT EDIT CONSTANTS IF YOU DO NOT KNOW WHAT YOU ARE DOING. 
  
  Editing constants could result in hash values being different and 
  breaking the protocol.
*/

// Structured memo constants
const STRUCTURED_MEMO_IDENTIFIER = 'memo.system:vrsc'
const STRUCTURED_MEMO_VERSION = 0

// Structured memo object constants
const STRUCTURED_MEMO_OBJECT_VERSION = 0

// Structured memo object identifiers
const STRUCTURED_CLAIM = 'claim:vrsc'
const STRUCTURED_MESSAGE = 'message:vrsc'
const STRUCTURED_INVOICE = 'invoice:vrsc'
const STRUCTURED_ATTESTATION = 'attestation:vrsc'
const STRUCTURED_EVENT = 'event:vrsc'
const STRUCTURED_BALLOT = 'ballot:vrsc'
const STRUCTURED_UNKNOWN = 'unknown:vrsc'

const STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX = {
  ['ef179f98cb644d95017cdebcdf1dbb3c8ba0597a']: STRUCTURED_CLAIM,
  ['9527b42cfad05feab21fd30095048e6318682b05']: STRUCTURED_MESSAGE,
  ['82b38d019051cfea73d6b5d6b1fffa4b382d03d9']: STRUCTURED_INVOICE,
  ['fbdfb4e7ad8586254f2b047ddf9a96a0c86d16fa']: STRUCTURED_ATTESTATION,
  ['18c972a4b3f72093afbab8736816ec7d2ff8c3aa']: STRUCTURED_EVENT,
  ['e9ac055003087e96dd3f44c5808b154fd94517dd']: STRUCTURED_BALLOT,
  ['5032330cb6ab1267d37c5d0da46e478808b1a370']: STRUCTURED_UNKNOWN
};

// Structured Memo Validity Check Codes
const VALID_SM = 0
const INVALID_SM_NO_SMI = 1
const INVALID_SM_UNKNOWN_ERROR = -1
const INVALID_SM_PARAMS = 2

module.exports = {
  STRUCTURED_MEMO_IDENTIFIER,
  STRUCTURED_MEMO_VERSION,
  STRUCTURED_MEMO_OBJECT_VERSION,
  STRUCTURED_CLAIM,
  STRUCTURED_MESSAGE,
  STRUCTURED_INVOICE,
  STRUCTURED_ATTESTATION,
  STRUCTURED_EVENT,
  STRUCTURED_BALLOT,
  STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX,
  VALID_SM,
  INVALID_SM_NO_SMI,
  INVALID_SM_UNKNOWN_ERROR,
  INVALID_SM_PARAMS
}