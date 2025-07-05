// MissionVision.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import VisionBannerSection from '../../components/vision/VisionBannerSection';
import VisionSection from '../../components/vision/VisionSection';
import Connectivity from '../../components/vision/Connectivity';
import Evolution from '../../components/vision/Evolution';
import DemographySection from '../../components/vision/DemographySection';
import LandUsePatternSection from '../../components/vision/LandUsePatternSection';
import PlanningAndDevelopmentSection from '../../components/vision/PlanningAndDevelopmentSection';

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div>
      <VisionBannerSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div data-aos="fade-up">
          <VisionSection />
        </div>
        <div data-aos="fade-up">
          <Connectivity />
        </div>
        <div data-aos="fade-up">
          <Evolution />
        </div>
        <div data-aos="fade-up">
          <DemographySection />
        </div>
        <div data-aos="fade-up">
          <LandUsePatternSection />
        </div>
        <div data-aos="fade-up">
          <PlanningAndDevelopmentSection />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
