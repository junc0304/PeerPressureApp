
class AddUserPostCommandHandler {
    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }
    
    handle(command) {
        // unitOfWork.getRepository().add(command.newUser);

        // update other data along the way user created. 
    }
}

module.exports = AddUserPostCommandHandler;