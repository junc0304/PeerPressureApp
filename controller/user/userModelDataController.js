const APP_CONSTANTS = require('../../util/constants/constants');

class UserModelDataController {
    constructor(userMapper, userBus, keyGenerator){
        this.userMapper = userMapper;
        this.bus = userBus;
        this.keyGenerator = keyGenerator;
    }

    /** 
     * Get a user object by userId given.
     * @param {*string} id 
     */
    getById(id) {
        
    }

    /**
     * Get a full list of users.
     */
    getAll() {

    }

    /**
     * Filter a list of users by a UserFilterModel
     * @param {UserFilterModel} userFilterModel 
     */
    filter(userFilterModel) {

    }

    /**
     * Create a new user with UserModel given.
     * @param {UserModel} userModel 
     */
    insert(userModel) {
        var newEntity = new User();
        userModel.PKeyId = keyGenerator.generateKey();
        this.userMapper.mapToEntity(userModel, newEntity);

        var addUserCommand = new AddUserCommand(newEntity);
        this.bus.send(APP_CONSTANTS.ADD_USER_COMMAND, addUserCommand);

        this.userMapper.mapToApiModel(userModel, newEntity);
    }

    /**
     * Update a user with UserModel given.
     * @param {UserModel} userModel 
     */
    update(userModel) {

    }

    /**
     * Delete a user pamenentally by a UserModel given.
     * @param {UserModel} userModel 
     */
    delete(userModel) {

    }
}

module.exports = UserModelDataController;