class UserBus extends Bus {
    constructor() {
        super();
    }

    send(commandString, command) {
        var handler = new AddUserCommandHandler(command);
        var postHandler = new AddUserPostCommandHandler(command);

        super.send(commandString, handler, postHandler);
    }


}