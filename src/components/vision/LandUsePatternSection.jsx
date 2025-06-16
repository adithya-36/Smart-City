// LandUsePatternSection.jsx
import React from 'react';
import MapTVM from '../../assets/images/tvm_map.jpg';

const LandUsePatternSection = () => {
  const landUseData = [
    { landUse: 'Residential', area: '120.34', percent: '56', guideline: '40-45%', color: '#D9ED92' },
    { landUse: 'Commercial', area: '2.53', percent: '1', guideline: '3 - 4%', color: '#B5E48C' },
    { landUse: 'Public/Semi Public', area: '27.86', percent: '13', guideline: '10 - 12%', color: '#99D98C' },
    { landUse: 'Transportation', area: '6.46', percent: '3', guideline: '12 - 14%', color: '#76C893' },
    { landUse: 'Industrial', area: '1.82', percent: '1', guideline: '8 - 10%', color: '#52B69A' },
    { landUse: 'Arks & Open Space', area: '0.54', percent: '0', guideline: '18 - 20%', color: '#34A0A4' },
    { landUse: 'Agriculture/Paddy Cultivation', area: '48.27', percent: '23', guideline: '-', color: '#168AAD' },
    { landUse: 'Water Bodies', area: '5.18', percent: '2', guideline: '-', color: '#1A759F' },
    { landUse: 'Total', area: '214.60', percent: '100%', guideline: '', color: '#1E6091' },
  ];

  return (
    <div className="mb-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#1A759F' }}>
        Land Use Pattern
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
        <img
          src={MapTVM}
          alt="Map of Thiruvananthapuram"
          className="w-full max-w-lg rounded-xl shadow-lg"
        />

        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead style={{ backgroundColor: '#1E6091' }}>
              <tr>
                <th className="px-4 py-3 text-left text-white font-semibold">Land Use</th>
                <th className="px-4 py-3 text-center text-white font-semibold">Area (sq. km)</th>
                <th className="px-4 py-3 text-center text-white font-semibold">%</th>
                <th className="px-4 py-3 text-center text-white font-semibold">As per URDPFI guidelines</th>
              </tr>
            </thead>
            <tbody>
              {landUseData.map((item, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td 
                    className="px-4 py-3 border-b border-gray-200 font-medium"
                    style={{ backgroundColor: item.color, opacity: 0.8 }}
                  >
                    {item.landUse}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">{item.area}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">{item.percent}{item.percent !== '100%' && '%'}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-center">{item.guideline}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-2 text-right">Source: Draft Masterplan Report 2015</p>
        </div>
      </div>
    </div>
  );
};

export default LandUsePatternSection;