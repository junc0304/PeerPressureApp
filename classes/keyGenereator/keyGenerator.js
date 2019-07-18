const uniqid = require('uuid/v1'); // timestamp bassed

class KeyGenerator {
    constructor() {}

    generateKey() {
        return uniqid();
    }
}

module.exports = KeyGenerator;