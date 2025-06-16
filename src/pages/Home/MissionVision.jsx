// MissionVision.jsx
import React from 'react'
import VisionBannerSection from '../../components/vision/VisionBannerSection'
import VisionSection from '../../components/vision/VisionSection'
import Connectivity from '../../components/vision/Connectivity'
import Evolution from '../../components/vision/Evolution'
import DemographySection from '../../components/vision/DemographySection'
import LandUsePatternSection from '../../components/vision/LandUsePatternSection'
import PlanningAndDevelopmentSection from '../../components/vision/PlanningAndDevelopmentSection'

const MissionVision = () => {
  return (
    <div>
      <VisionBannerSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <VisionSection />
        <Connectivity />
        <Evolution />
        <DemographySection />
        <LandUsePatternSection />
        <PlanningAndDevelopmentSection />
      </div>
    </div>
  )
}

export default MissionVision