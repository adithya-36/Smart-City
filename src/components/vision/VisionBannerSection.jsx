import React from 'react'
import VisionBanner from '../../assets/banners/visionBanner.jpg'
const VisionBannerSection = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${VisionBanner})`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
            Vision & Strategy
          </h1>
        </div>
      </div></div>
  )
}

export default VisionBannerSection