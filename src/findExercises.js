import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export const getStudentById = (id) => {
    const arrayOfStudents = students.find(oneStudent => {
        if (oneStudent.id === id) {
            return oneStudent
        }
    })
    return arrayOfStudents
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) => {
    const arrayofInstructors = instructors.find(eachInstructor => {
        if (eachInstructor.id === id) {
            return eachInstructor
        }
    })
    return arrayofInstructors
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
    const studentLastName = students.find(student => {
        if (student.lastName.toLowerCase() === lastName.toLowerCase()) {
            return student
        }
    })
    return studentLastName
} 

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
    const studentName = students.find(studnet =>
        `${studnet.firstName} ${studnet.lastName}`.toLowerCase() === fullName.toLowerCase()
    )
    return studentName
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) => {
    const instructor = students.find(studnet => studentId === studnet.id) 
        return instructors.find(senpai => senpai.id === instructor.instructorId)
}
  
// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
export const getStudentWithMostLangs =  () =>{
    let mostLang = 0;
    let length = 0;
        students.forEach(code => {
            if(code.languages.length > mostLang) {
                mostLang = code.languages.length
                length = code.id
            }
        })
        return students.find(student => student.id === length)
}