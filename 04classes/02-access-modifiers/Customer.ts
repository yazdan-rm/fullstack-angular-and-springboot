class Customer{
    private _firstName: string;
    private _lastName: string ;

    constructor(firstName: string , lastName: string){
        this._lastName = lastName;
        this._firstName = firstName;
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);