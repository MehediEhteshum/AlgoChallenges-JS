// Fill in the object constructor with the following methods below: getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
class Person {
  constructor(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let firstName = fullName.split(" ")[0];
    let lastName = fullName.split(" ")[1];

    // getters.
    this.getFullName = function () {
      return firstName + " " + lastName;
    };
    this.getFirstName = function () {
      return firstName;
    };
    this.getLastName = function () {
      return lastName;
    };
    // setters;
    this.setFirstName = function (fName) {
      firstName = fName;
    };
    this.setLastName = function (lName) {
      lastName = lName;
    };
    this.setFullName = function (firstAndLast) {
      fullName = firstAndLast;
      firstName = fullName.split(" ")[0];
      lastName = fullName.split(" ")[1];
    };
  }
}
  
  var bob = new Person('Bob Ross');
  console.log("firstName:", bob.firstName, ": protected.");
  console.log("getFirstName:", bob.getFirstName());
  