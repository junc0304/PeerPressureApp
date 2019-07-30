const HttpErrorHandler = require('../classes/httpErrorHandler/httpErrorHandler');
const User = require('../models/user/userModel');

class UserController {
    constructor(userModelDataController) {
        this.userModelDataController = userModelDataController;
    }

    getUserById(id) {
        var result;
        
        try {
            result = this.userModelDataController.getById(id);
        } catch(err) {
            throw new HttpErrorHandler(400, err);
        }
        
        return result;
    }

    getAll() {
        var result;

        try {
            result = this.userModelDataController.getAll();
        } catch(err) {
            throw new HttpErrorHandler(400, err);
        }

        return result;
    }

    deleteUser(userModel) {
        var result;

        try {
            result = this.userModelDataController.delete(new UserModel.fromJSON(userModel));
        } catch(err) {
            throw new HttpErrorHandler(400, err);
        }
        
        return result;
    }

    update(newDetails) {
        var result;

        try {
            result = this.userModelDataController.update(new User.fromJSON(newDetails));
        } catch(err) {
            throw new HttpErrorHandler(400, err);
        }

        return result;
    }

    create(userModel) {
        var result;

        try {
            result = this.userModelDataController.insert(userModel);
        } catch(err) {
            throw new HttpErrorHandler(400, err);
        }

        return result;
    }

    filter(userFilterModel) {
       var result;

       try {
           result = this.userModelDataController.filter(new UserFilterModel.createNewModel(userModel));
       } catch(err) {
           throw new HttpErrorHandler(400, err);
       }

       return result;
    }
}

module.exports = UserController;