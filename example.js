const assert = require('./')
const nanoerror = require('nanoerror')

const CoolError = nanoerror('COOL_ERR', '🙈 %s COOL ERROR FOUND: %s')

assert(false, CoolError, '🕸', ' oops :S 🐛')
