import React from 'react'
import AboutMe from '../AboutUs/AboutMe'
import Comments from '../Comments/Comments'
import Courses from '../Courses/Courses'
import Home from '../Home/Home'
import Partner from '../Partners/Partner'
import Teachers from '../Teachers/Teachers'

function HomPage() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Courses />
      <Teachers />
      <Comments />
      <Partner />
    </div>
  )
}

export default HomPage
