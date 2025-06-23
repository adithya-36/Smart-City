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
import EnteKeralam from './pages/Events/EnteKeralam'
import GovernmentOrders from './pages/Downloads/GovernmentOrders'
import ProjectPage from './pages/Project/ProjectPage'
import ContactUs from './pages/Contact/ContactUs'
import RegisterComplaint from './pages/Contact/RegisterComplaint'
import Poll from './pages/Contact/Poll'
import RTI from './pages/Contact/RTI'
import Careers from './pages/Career/Careers'
import Internship from './pages/Career/Internship'
import TulipInternship from './pages/Career/TulipInternship'
import PhotoGallery from './pages/Gallery/PhotoGallery'
import VideoGallery from './pages/Gallery/VideoGallery'
import ABDProject from './pages/Project/ABDProject'
import SCTLProject from './pages/Project/SCTLProject'
import OngoingProject from './pages/Project/OngoingProject'
import CompletedProject from './pages/Project/CompletedProject'
import PancityProject from './pages/Project/PancityProject'
import MPR from './pages/Project/MPR'
import Financials from './pages/SCTL/Financials'
import CITIIS from './pages/Project/CITIIS'
import ProjectFunds from './pages/SCTL/ProjectFunds'
import Consultant from './pages/SCTL/Consultant'
import Anniversary from './pages/Events/Anniversary'
import Conclave from './pages/Events/Conclave'
import Inauguration from './pages/Events/Inauguration'
import News from './pages/Events/News'
import Terms from './components/layout/Terms'
import Privacy from './components/layout/Privacy'
import Disclaimer from './components/layout/Disclaimer'
import ScrollToTopButton from './components/layout/ScrollToTopButton'
import ConvergenceProject from './pages/Project/ConvergenceProject'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CityProfile" element={<CityProfile />} />
          <Route path="/SmartCityDef" element={<SmartCityDef />} />
          <Route path="/MissionAbout" element={<MissionAbout />} />
          <Route path="/MissonChallenge" element={<MissonChallenge />} />
          <Route path="/MissonVision" element={<MissonVision />} />
          <Route path="/ABDProject" element={<ABDProject />} />
          <Route path="/ConvergenceProject" element={<ConvergenceProject />} />
          <Route path="/SCTLProject" element={<SCTLProject />} />
          <Route path="/OngoingProject" element={<OngoingProject />} />
          <Route path="/CompletedProject" element={<CompletedProject />} />
          <Route path="/MPR" element={<MPR />} />
          <Route path="/PancityProject" element={<PancityProject />} />
          <Route path="/citiis" element={<CITIIS />} />
          <Route path="/funds" element={<ProjectFunds />} />
          <Route path="/pmc_consultant" element={<Consultant />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/ProjectMilestone" element={<ProjectMilestone />} />
          <Route path="/city-highlights" element={<CityHighlight />} />
          <Route path="/smart-city-overview" element={<CityOverview />} />
          <Route path="/project-area" element={<CityProject />} />
          <Route path="/abd-area" element={<ABDArea />} />
          <Route path="/photoGallery" element={<PhotoGallery />} />
          <Route path="/videoGallery" element={<VideoGallery />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Tenders" element={<TenderTable />} />
          <Route path="/news" element={<News />} />
          <Route path="/conclave" element={<Conclave />} />
          <Route path="/Anniversary" element={<Anniversary />} />
          <Route path="/inauguration" element={<Inauguration />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/registerComplaint" element={<RegisterComplaint />} />
          <Route path="/poll" element={<Poll />} />
          <Route path="/RTI" element={<RTI />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/tulip-internship" element={<TulipInternship />} />
          <Route path="/EnteKeralam" element={<EnteKeralam />} />
          <Route path="/GovernmentOrders" element={<GovernmentOrders />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default App;