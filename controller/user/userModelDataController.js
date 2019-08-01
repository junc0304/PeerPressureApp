const APP_CONSTANTS = require('../../util/constants/constants');
const AddUserCommand = require('../../command/user/addUserCommand/addUserCommand');

class UserModelDataController {
    constructor(userMapper, userBus, keyGenerator, queryService){
        this.userMapper = userMapper;
        this.bus = userBus;
        this.keyGenerator = keyGenerator;
        this.queryService = queryService;
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

        this.bus.send( APP_CONSTANTS.ADD_USER_COMMAND, new AddUserCommand(newEntity) );

        this.userMapper.mapToApiModel(userModel, newEntity);
    }

    /**
     * Update a user with UserModel given.
     * @param {UserModel} userModel 
     */
    update(modelToUpdate) {
        var entity = queryService.findById(modelToUpdate.id);
        this.userMapper.mapToEntity(modelToUpdate, entity);

        this.bus.send( APP_CONSTANTS.UPDATE_USER_COMMAND, new UpdateUserCommand(entity) );
    }

    /**
     * Delete a user pamenentally by a UserModel given.
     * @param {UserModel} userModel 
     */
    delete(userModel) {

    }
}

module.exports = UserModelDataController;