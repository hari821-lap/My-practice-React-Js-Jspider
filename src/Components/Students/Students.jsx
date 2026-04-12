import './students.css'
import { StudentsBCA } from './StudentsBCA'
import { StudentsBsc } from './StudentsBsc'
import { studentdata } from './StudentsData'


const Students = () => {
    let studentBCA = studentdata.filter(ele => ele.degree == "BCA")
    // console.log(studentBCA)
     let studentBsc = studentdata.filter(ele => ele.degree == "Bsc")
    return (
        <><StudentsBCA std={studentBCA} />
        {/* <StudentBsc stdBsc={studentBsc}></StudentBsc> */}
        <StudentsBsc std={studentBsc}></StudentsBsc>
        </>
    )

}

export default Students