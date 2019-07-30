class User {
    constructor(firstName, lastName, email) {
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.email      = email;
    }

    static jsonToUser(json) {
        return new User( json.firstName,
                         json.lastName,
                         json.email );
    }
}

module.exports = UserModel;