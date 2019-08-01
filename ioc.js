const { createContainer, asClass, asFucntion, InjectionMode } = require('awilix');
const eventEmitter = require('./eventEmitter/eventEmitter');

const unitOfWork = require('./classes/unitOfWork/unitOfWork');
const repositoryFactory = require('./classes/Repository/repositoryFactory');
const keyGenerator = require('./classes/keyGenereator/keyGenerator');

// Repository
const userRepository = require('./classes/Repository/user/userRepository');

// bus
const bus = require('./classes/bus/bus');
const userBus = require('./classes/bus/user/userBus');

// Controllers
const userController = require('./controller/userController');

// ModelDataControllers
const userModelDataController = require('./controller/user/userModelDataController');

// Mappers
const userMapper = require('./mappers/user/userMapper');

// Command
const addUserCommand = require('./command/user/addUserCommand/addUserCommand');
const addUserCommandHandler = require('./command/user/addUserCommand/addUserCommandHandler');
const addUserPostCommandHandler = require('./command/user/addUserCommand/addUserPostCommand');

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    eventEmitter: asClass(eventEmitter),
    unitOfWork: asClass(unitOfWork),
    repositoryFactory: asClass(repositoryFactory),
    keyGenerator: asClass(keyGenerator),

    // Repository
    userRepository: asClass(userRepository),

    // Bus
    bus: asClass(bus),
    userBus: asClass(userBus),
    // Controllers
    userController: asClass(userController),
    userModelDataController: asClass(userModelDataController),
    // Mappers
    userMapper: asClass(userMapper),
});

global.container = container;