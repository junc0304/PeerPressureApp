const Enums = require('../../util/constants/enums');

class RepositoryFactoy {
    constructor(userRespoitory) {
        this.userRespoitory = userRespoitory;
        
        this.repositories = {};
        this.repositories[Enums.entities.USER] = this.userRespoitory;
    }
    
    getByType(type) {
        return this.repositories[type];
    }
}

module.exports = RepositoryFactoy;