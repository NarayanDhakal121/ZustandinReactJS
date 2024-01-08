import React, {useState} from 'react'
import useCourseStore from '../Zustand/courseStore'

const CourseForm = () => {
    const addCourse = useCourseStore((state)=>state.addCourse);

    const [courseTitle, setCourseTitle] = useState('');
    console.log('CourseForm Rendered');

    const handleCourseSubmit = () => {
        if(!courseTitle) return alert('Please add a course title');
        addCourse({
            id:Math.ceil(Math.random()*100000000),
            title:courseTitle,
        })
        setCourseTitle('');
    };

  return (
   <div className="form-container">
    <input type="text" 
    value={courseTitle}
    onChange={(e)=>{
        setCourseTitle(e.target.value);
    }}
    className='form-input' />

    <button onClick={handleCourseSubmit} className="form-submit-btn">
        AddCourse
    </button>
   </div>
  )
}

export default CourseForm;
