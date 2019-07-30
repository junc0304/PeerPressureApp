class AddCommandHandler {
    constructor(unitOfWork) {
        this.unitOfWork  = unitOfWork;
    }

    onHandle(entityName, context) {
        this.unitOfWork.getRepository(entityName).add(context);
    }
}

module.exports = AddCommandHandler;