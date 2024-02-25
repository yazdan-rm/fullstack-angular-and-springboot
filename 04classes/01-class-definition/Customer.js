var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
