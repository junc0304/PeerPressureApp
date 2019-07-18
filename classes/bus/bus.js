class Bus {
    constructor(eventEmitter, unitOfWork) {
        this.eventEmitter = eventEmitter;
        this.unitOfWork = unitOfWork;
    }

    send(commandString, handler, postHandler) {
        this.eventEmitter.register(commandString, () => {
            setImmediate((command) => { // 3
                postHandler.handle();
            });

            // process.nextTick(); 2 

            handler.handle(); // 1
        });

        this.eventEmitter.emit(commandString);
    }

    commit() {
        //TODO: save changes of work related to db. 
        this.unitOfWork.commit();
    }
}

module.exports = Bus;