import React, { useState } from 'react';
import NavBar from './NavBar';
import StudentCard from './StudentCard';
import StudentData from './StudentData';
import Footer from './Footer';

const StudentList = () => {
    const [students, setStudents] = useState(StudentData);
    //console.log(setStudents);
    console.log(students);
    return (
        <div className="container">
            <NavBar />
        <center><h1>Student List</h1></center>
            <div className="row">
            {
                students.map(students => <StudentCard studentDetails={students}></StudentCard>)
            }
            </div>
            <Footer />    
        </div>
    
    );
};

export default StudentList;