step-1 :
mongod.exe --dbpath C:\Mongo_data
step-2 :
mongo.exe

show dbs;
use db;
show collections;

db //this will show which database is currently selected

use mynewdb //this will create a new database and will not be shown untill we don't add any collections into it.

db.dropDatabase() //this will drop the current database.

db.books.find().count();
db.books.count();
db.books.find().limit(5); //to limit the records
db.books.find().sort({name:1}); //sorting using name asc order
db.books.find().sort({name:-1}); //sorting using name asc order

db.createCollection("employee")
db.employee.drop(); //this will drop this collection
db.employee.insert({_id:1,name:"sachin gupta",salary:5000})
db.employee.find({_id:1})

db.employee.find({name:"sure gupta"})
db.employee.find({salary:4000})
db.employee.findOne()
db.employee.find({},{name:1}) will select only names, by default id will always be displayed. Here 1 indicates display 0 indicates don't display
db.employee.find({},{name:1,_id:0}) this will not display _id
db.employee.find({name:{$ne:"sachin gupta"}}) not equal to
db.employee.find({salary:{$gte:5000}}) -- >= operator
db.employee.find({salary:{$lt:5000}}) -- < operator
db.employee.find({salary:{$in:[5000,6000,9000]}}) -- in operator
db.employee.find({salary:{$nin:[5000,6000,9000]}}) -- not in operator

db.employee.insert({_id:7,name:"paresh",salary:9000})
db.employee.insert({_id:8,name:"ganesh",salary:2000})
db.employee.insert({_id:9,name:"swapnil",salary:1000})

db.createCollection( "employee", {
   validator: { $jsonSchema: {
      bsonType: "object",
      required: [ "phone" ],
      properties: {
         phone: {
            bsonType: "string",
            description: "must be a string and is required"
         },
         email: {
            bsonType : "string",
            pattern : "@mongodb\.com$",
            description: "must be a string and match the regular expression pattern"
         },
         status: {
            enum: [ "Unknown", "Incomplete" ],
            description: "can only be one of the enum values"
         }
      }
   } }
} )