const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/labDB',);
const studentSchema = new mongoose.Schema({ name: String,
age: Number,  grade: String
});

const Student = mongoose.model('Student', studentSchema);

const students = [
{ name: 'Alice', age: 21, grade: 'B' },
{ name: 'Bob', age: 22, grade: 'A' },
{ name: 'Charlie', age: 23, grade: 'C' }
];

Student.insertMany(students)
.then(() => console.log('Students inserted!'))
.catch(err => console.log('Error:', err));

Student.find()
.then(students => console.log('All Students:', students))
.catch(err => console.log('Error:', err));

// 3. Update a student’s grade
Student.updateOne({ name: 'Alice' }, { $set: { grade: 'A+' } })
.then(() => console.log('Student updated!'))
.catch(err => console.log('Error:', err));

// 4. Delete a student by ID
Student.findByIdAndDelete('69a7027787e6e9f784806a69') 
.then(() => console.log('Student deleted!'))
.catch(err => console.log('Error:', err));
