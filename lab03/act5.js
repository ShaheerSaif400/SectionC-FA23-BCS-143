const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/labDB');

// Course Schema
const courseSchema = new mongoose.Schema({ name: String,
duration: String
});

const Course = mongoose.model('Course', courseSchema);

// Student Schema with reference to Course 
const studentSchema = new mongoose.Schema({
name: String, age: Number, grade: String,
enrolledCourse: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

const Student = mongoose.model('Student', studentSchema);

// Create a new course and student

const newCourse = new Course({ name: 'Mathematics', duration: '6 months' }); 
newCourse.save()
.then(course => {
const newStudent = new Student({ name: 'John Doe',
age: 20, grade: 'A',
enrolledCourse: course._id
});
return newStudent.save();
})
.then(student => console.log('Student with course:', student))
.catch(err => console.log('Error:', err));

// Populate course info when querying student 
Student.findOne({ name: 'John Doe' })
.populate('enrolledCourse')
.then(student => console.log('Student with populated course:', student))
.catch(err => console.log('Error:', err));
