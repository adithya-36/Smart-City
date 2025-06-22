// LandUsePatternSection.jsx
import React from 'react';
import MapTVM from '../../assets/images/tvm_map.jpg';

const LandUsePatternSection = () => {
  const landUseData = [
    { landUse: 'Residential', area: '120.34', percent: '56', guideline: '40-45%' },
    { landUse: 'Commercial', area: '2.53', percent: '1', guideline: '3 - 4%' },
    { landUse: 'Public/Semi Public', area: '27.86', percent: '13', guideline: '10 - 12%' },
    { landUse: 'Transportation', area: '6.46', percent: '3', guideline: '12 - 14%' },
    { landUse: 'Industrial', area: '1.82', percent: '1', guideline: '8 - 10%' },
    { landUse: 'Arks & Open Space', area: '0.54', percent: '0', guideline: '18 - 20%' },
    { landUse: 'Agriculture/Paddy Cultivation', area: '48.27', percent: '23', guideline: '-' },
    { landUse: 'Water Bodies', area: '5.18', percent: '2', guideline: '-' },
    { landUse: 'Total', area: '214.60', percent: '100%', guideline: '' },
  ];

  return (
    <div className="mb-16 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#184E77' }}>
        Land Use Pattern
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/2">
          <img
            src={MapTVM}
            alt="Map of Thiruvananthapuram"
            className="w-full h-auto border border-gray-200"
          />
        </div>

        <div className="w-full lg:w-1/2 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: '#1E6091' }}>
                <th className="px-4 py-3 text-left text-white font-semibold text-sm border border-gray-300">Land Use</th>
                <th className="px-4 py-3 text-center text-white font-semibold text-sm border border-gray-300">Area (sq. km)</th>
                <th className="px-4 py-3 text-center text-white font-semibold text-sm border border-gray-300">%</th>
                <th className="px-4 py-3 text-center text-white font-semibold text-sm border border-gray-300">URDPFI Guidelines</th>
              </tr>
            </thead>
            <tbody>
              {landUseData.map((item, index) => (
                <tr 
                  key={index} 
                  className={index === landUseData.length - 1 ? 'font-semibold' : ''}
                >
                  <td 
                    className="px-4 py-3 text-sm border border-gray-200" 
                    style={{ 
                      backgroundColor: index === landUseData.length - 1 ? '#184E77' : '#1E6091',
                      color: 'white'
                    }}
                  >
                    {item.landUse}
                  </td>
                  <td className="px-4 py-3 text-sm text-center border border-gray-200 bg-white">
                    {item.area}
                  </td>
                  <td className="px-4 py-3 text-sm text-center border border-gray-200 bg-gray-50">
                    {item.percent}{item.percent !== '100%' && '%'}
                  </td>
                  <td className="px-4 py-3 text-sm text-center border border-gray-200 bg-white">
                    {item.guideline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2 text-right">Source: Draft Masterplan Report 2015</p>
        </div>
      </div>
    </div>
  );
};

export default LandUsePatternSection;