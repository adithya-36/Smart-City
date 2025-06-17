import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/Home/HomePage'
import CityProfile from './pages/Home/CityProfile'
import SmartCityDef from './pages/Home/SmartCityDef'
import MissionAbout from './pages/Home/MissionAbout'
import MissonChallenge from './pages/Home/MissionChallenge'
import MissonVision from './pages/Home/MissionVision'
import ProjectMilestone from './pages/Home/ProjectMilestone'
import CityHighlight from './pages/Home/ExploreCity/CityHighlight'
import CityOverview from './pages/Home/ExploreCity/CityOverview'
import CityProject from './pages/Home/ExploreCity/CityProject'
import ABDArea from './pages/Home/ExploreCity/ABDArea'
import TenderTable from './pages/Tenders/TenderTable'
import EnteKeralam from './pages/EnteKeralam/EnteKeralam'
import GovernmentOrders from './pages/Downloads/GovernmentOrders'
import ProjectPage from './pages/Project/ProjectPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/CityProfile' element={<CityProfile/>} />
            <Route path='/SmartCityDef' element={<SmartCityDef/>} />
            <Route path='/MissionAbout' element={<MissionAbout/>} />
            <Route path='/MissonChallenge' element={<MissonChallenge/>} />
            <Route path='/MissonVision' element={<MissonVision/>} />
            <Route path='/ProjectMilestone' element={<ProjectMilestone/>} />
            <Route path="/city-highlights" element={<CityHighlight/>} />
            <Route path="/smart-city-overview" element={<CityOverview/>} />
            <Route path="/project-area" element={<CityProject/>} />
            <Route path="/abd-area" element={<ABDArea/>} />
            
            <Route path="/Projects" element={<ProjectPage/>} />
            <Route path="/Tenders" element={<TenderTable/>} />
            <Route path="/EnteKeralam" element={<EnteKeralam/>} />
            <Route path="/GovernmentOrders" element={<GovernmentOrders/>} />

          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App