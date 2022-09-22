import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("user component loaded")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Enes","Oran", "İstanbul")
let user2 = new User(2,"Hamza","Oran", "İstanbul")

userService.add(user1)
userService.add(user2)



//console.log(userService.list())
//console.log(userService.getById(2))

let customer = {id:1, firstName:"Büşra"}
//prototyping
customer.lastName = "Oran"

console.log(customer.lastName)

console.log("--------------------------------")

userService.load()

let customerToAdd = new Customer(1,"Furkan", "Ekici","Adana","dsjdgsh")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())