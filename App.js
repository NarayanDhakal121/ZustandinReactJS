import React from 'react'
import CourseForm from './component/courseform'
import CourseList from './component/courseList'

const App = () => {
  return (
    <div className="main-container">
      
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom:'2rem',
      }}>
My Course List
      </h1>
      <CourseForm/>
      <CourseList/>
    
    </div>
    
  )
}

export default App