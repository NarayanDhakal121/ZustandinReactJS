import React from 'react'
import useCourseStore from '../Zustand/courseStore'

const CourseList = () => {
    const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCOurseStatus
        })
    )

  return (
    <>
        <ul>
            {courses.map((course, i) => {
                return (
                    <React.Fragment key={i}>
                        <li
                            className={`course-item`}
                            style={{
                                backgroundColor: course.completed ? "#00ff0044" : "white",
                            }}>
                            <span className='course-item-col-1'>
                                <input 
                                    type="checkbox" 
                                    checked={course.completed}
                                    onChange={() => {
                                        toggleCourseStatus(course.id);
                                    }}
                                />
                                <span>{course?.title}</span>
                                <button 
                                    onClick={() => {
                                        removeCourse(course.id)
                                    }}
                                    className='delete-btn'>
                                    Delete
                                </button>
                            </span>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    </>
  )
}

export default CourseList;
