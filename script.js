//your JS code here. If required.
let student = {
    name: 'John Doe'
};

Object.prototype.getKeys = function() {
    return Object.keys(this);
};


console.log(student.getKeys());
