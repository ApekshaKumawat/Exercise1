




const students = [
    {firstName: 'Apeksha', lastName: 'Kumawat', age: 21, gender: 'female', rollNo: '1592', dob:'2002-11-16', hobbies: 'Reading, Writing', mobileDevice: 'Android'},
    {firstName: 'Harry', lastName: 'Potter', age: 21, gender: 'male', rollNo: '2500', dob:'2000-04-26', hobbies: 'Dancing, Singing', mobileDevice: 'iOS'},
];

var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var age = document.getElementById('age').value;
var gender = document.getElementById('gender').value;
var rollNo = document.getElementById('rollNo').value;
var dob = document.getElementById('dob').value;
var hobbies = document.getElementById('hobbies').value;
var mobileDevice = document.getElementById('mobileDevice').value;



function validateForm(){

    if(!firstName || !lastName || !isNaN(age) || !gender || !rollNo || !dob || !hobbies || !mobileDevice)
        alert("Please fill all the fields!!");
    else
        console.log("Form submitted!");
}

function getStudentDetails(){
    const rollNo= (document.getElementById('rollNo')).value;

    const student = students.find(s => s.rollNo === rollNo);

    if(student){
        console.log("Student details : ");
        console.log("First Name: ", student.firstName);
        console.log("Last Name: ", student.lastName);
        console.log("Age: ", student.age);
        console.log("Gender: ", student.gender);
        console.log("Roll No: ", student.rollNo);
        console.log("Date of birth: ", student.dob);
        console.log("Hobbies: ", student.hobbies);
        console.log("Mobile Device: ", student.mobileDevice);

    }else{
        console.log("Student not found with this roll id: ", rollNo);
    }
}