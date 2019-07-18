const Enums = require('../../../util/constants/enums')

class AddUserCommand {
    constructor(newUser) {
        this.newUser = newUser;
    }
}

class AddUserCommandHandler {
    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }
    
    handle(command) {
        this.unitOfWork.getRepository(Enums.entities.USER).add(command.newUser);
    }
}

module.exports = { AddUserCommand, AddUserCommandHandler };