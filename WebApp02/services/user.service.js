class UserService
{
    constructor()
    {
        this.users = new Map();
        this.users.set("sachin@gmail.com",{email:"sachin@gmail.com",password:"pass@123",name:"sachin mogre",age:34,phone:"123121"});
        this.users.set("ramesh@gmail.com",{email:"ramesh@gmail.com",password:"pass@321",name:"ramesh mogre",age:23,phone:"734323"});
    }

    authenticate(email,password)
    {
        if(this.users.has(email))
        {
            let user = this.users.get(email);
            if(user.password == password)
            {
                return user;
            }
        }

        return null;
    }
}

module.exports = new UserService();