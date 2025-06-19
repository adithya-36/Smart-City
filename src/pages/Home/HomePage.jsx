import React from 'react'
import HomeItem1 from '../../components/home/HomeItem1'
import HomeItem2 from '../../components/home/HomeItem2'
import HomeItem3 from '../../components/home/HomeItem3'
import HomeItem4 from '../../components/home/HomeItem4'
import ProjectDisplay from '../../components/home/ProjectsDisplay.jsx'
const HomePage = () => {
  return (
    <div>
      <HomeItem4/>
      <HomeItem1/>
      <HomeItem2/>
      <HomeItem3/>
      <ProjectDisplay/>
    </div>
  )
}

export default HomePage