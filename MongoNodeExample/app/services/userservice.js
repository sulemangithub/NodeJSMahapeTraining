const UserModel = require("../models/usermodel");

class UserService
{
    registerUser(user)
    {
        let usermodel = new UserModel(user);
        return usermodel.save();
    }

    validateUser(email,password)
    {
        return UserModel.findById(email).where({password:password}).exec();
    }
}

module.exports = UserService;