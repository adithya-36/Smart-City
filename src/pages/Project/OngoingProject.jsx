import React from 'react';
import Banner from '../../assets/banners/ongoingProjectBanner.png';

const OngoingProject = () => {
  // Table data from the first image
  const table1Data = [
    { no: 1, projectId: "KER-TIR-079", projectName: "CONSTRUCTION OF SMART ROADS - KRFB-PHASE 2", scm: "125.48" },
    { no: 2, projectId: "KER-TIR-110", projectName: "Selection of Master System Integrator ICCC ph 2", scm: "61.31" },
    { no: 3, projectId: "KER-TIR-100", projectName: "Procurement of buses for KSRTC PHASE 3", scm: "48.2" },
    { no: 4, projectId: "KER-TIR-112", projectName: "ROOF TOP SOLAR ANERT PH 7", scm: "45.84" },
    { no: 5, projectId: "KER-TIR-097", projectName: "CONSTRUCTION OF SMART ROADS - CORPORATION-PHASE 4", scm: "40.62" },
    { no: 6, projectId: "KER-TIR-050", projectName: "Construction of Smart Road Corporation Roads", scm: "40" },
    { no: 7, projectId: "KER-TIR-104", projectName: "MLCP AT VARIOUS LOCATIONS", scm: "35" },
    { no: 8, projectId: "KER-TIR-113", projectName: "ROOF TOP SOLAR ANERT PH 8", scm: "34.36" },
    { no: 9, projectId: "KER-TIR-046", projectName: "Selection of System Integrator for ITMS TSCCC ATCS Phase 3", scm: "29.85" },
    { no: 10, projectId: "KER-TIR-057", projectName: "Redevelopment of Palayam Market- incl. prefab structure and pit puzzle parking", scm: "28.54" },
    { no: 11, projectId: "KER-TIR-092", projectName: "Procurement of E-vehicles and chargers for promoting E-mobility", scm: "23.9" },
    { no: 12, projectId: "KER-TIR-109", projectName: "Construction of Multi Level Car Parking at A Block, Palayam Ph 2", scm: "19.75" },
    { no: 13, projectId: "KER-TIR-106", projectName: "JUNCTION IMPROVEMENT & EASE OF ACCESS", scm: "19.42" },
  ];

  // Table data from the second image
  const table2Data = [
    { no: 14, projectId: "KER-TIR-111", projectName: "City Beautification projects Ph 2", scm: "18.99" },
    { no: 15, projectId: "KER-TIR-019", projectName: "Construction of Warehousing at Chalai", scm: "18.66" },
    { no: 16, projectId: "KER-TIR-073", projectName: "Rehabilitation Block for TRIDA", scm: "17.5" }, // Corrected from 17.S to 17.5
    { no: 17, projectId: "KER-TIR-096", projectName: "CONSTRUCTION OF SMART ROADS - CORPORATION-PHASE 2", scm: "16.01" },
    { no: 18, projectId: "KER-TIR-105", projectName: "E-EDUCATION FACILITIES & ALLIED INFRASTRUCTURES", scm: "12" },
    { no: 19, projectId: "KER-TIR-033", projectName: "Integrated Social Housing Complex Project at Rajaji Nagar - Phase I", scm: "8" },
    { no: 20, projectId: "KER-TIR-090", projectName: "City Beautification projects Ph 1", scm: "5.38" },
    { no: 21, projectId: "KER-TIR-091", projectName: "Smart Solutions for Decentralised Solid waste management", scm: "4.49" },
    { no: 22, projectId: "KER-TIR-082", projectName: "GIS-based asset mapping and digitization of property tax", scm: "3.98" },
    { no: 23, projectId: "KER-TIR-093", projectName: "E-health Solutions", scm: "3" },
    { no: 24, projectId: "KER-TIR-083", projectName: "Installation of Tensile Roof above Central Plaza, East Fort", scm: "2.9" },
    { no: 25, projectId: "KER-TIR-058", projectName: "Upgradation of crematoriums within the Corporation", scm: "2.41" },
    { no: 26, projectId: "KER-TIR-059", projectName: "Development of ICCC Civil", scm: "2.09" },
    { no: 27, projectId: "KER-TIR-018", projectName: "Upgradation of amenities at sewage treatment plant", scm: "2.03" },
  ];

  // Combine both tables for display
  const allProjects = [...table1Data, ...table2Data];

  // Calculate statistics
  const totalProjects = allProjects.length;
  const totalInvestment = allProjects.reduce((sum, project) => sum + parseFloat(project.scm), 0).toFixed(2);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 60, 80, 0.85), rgba(0, 128, 128, 0.6)), url(${Banner})`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 drop-shadow-lg">
            Ongoing Projects
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Current Initiatives Transforming Our City
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore the wide range of projects currently underway across Thiruvananthapuram.
            These initiatives represent our ongoing commitment to creating a smarter, more sustainable urban environment.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-700">{totalProjects}</div>
            <div className="text-lg text-gray-600 mt-2">Active Projects</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-700">₹{totalInvestment} Cr</div>
            <div className="text-lg text-gray-600 mt-2">Total Investment</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-700">24+</div>
            <div className="text-lg text-gray-600 mt-2">Development Zones</div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                <tr>
                  <th className="py-4 px-4 text-left text-sm md:text-base font-semibold">No</th>
                  <th className="py-4 px-4 text-left text-sm md:text-base font-semibold">Project ID</th>
                  <th className="py-4 px-4 text-left text-sm md:text-base font-semibold">Project Name</th>
                  <th className="py-4 px-4 text-right text-sm md:text-base font-semibold">SCM (₹ in Cr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allProjects.map((project, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-150 hover:bg-blue-50 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                  >
                    <td className="py-4 px-4 text-gray-700 font-medium">{project.no}</td>
                    <td className="py-4 px-4 text-blue-600 font-mono">{project.projectId}</td>
                    <td className="py-4 px-4 text-gray-700">{project.projectName}</td>
                    <td className="py-4 px-4 text-right text-gray-700 font-medium">{project.scm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">8</div>
              <h3 className="text-xl font-semibold mb-2">Smart Mobility</h3>
              <p className="text-blue-100">Parking, junctions, e-mobility</p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">7</div>
              <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
              <p className="text-green-100">Solar installations, green tech</p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">6</div>
              <h3 className="text-xl font-semibold mb-2">Urban Infrastructure</h3>
              <p className="text-amber-100">Roads, markets, warehouses</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-6 text-white shadow-lg">
              <div className="text-4xl font-bold mb-2">6</div>
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-purple-100">GIS, e-health, smart solutions</p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Timeline</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-800">Phase 1 (2022-2023)</h3>
                  <p className="text-gray-600 mt-2">Foundation projects: Smart Roads Phase 1, Solar Installations, Basic Infrastructure</p>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* Phase 2 */}
              <div className="flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12">
                  <h3 className="text-xl font-bold text-gray-800">Phase 2 (2023-2024)</h3>
                  <p className="text-gray-600 mt-2">Expansion: E-mobility, MLCPs, ICCC development, City Beautification</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                <div className="w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-800">Phase 3 (2024-2025)</h3>
                  <p className="text-gray-600 mt-2">Digital Transformation: GIS mapping, E-health, Smart Waste Management</p>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* Phase 4 */}
              <div className="flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12">
                  <h3 className="text-xl font-bold text-gray-800">Phase 4 (2025-2026)</h3>
                  <p className="text-gray-600 mt-2">Completion: Social housing, Advanced ITMS, Integrated Smart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Project Inquiries</h2>
            <p className="text-blue-100 text-lg mb-6">
              For more information about any ongoing project, contact our project management team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXDxrNVMwRzGNKlDWSDmVzjdLvmrXsncntNmfrvCxLWddWBPDFQjkstDBxwvlKdmpBnnJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Email Project Team
              </a>
              <a
                href="tel:+91 - 0471 - 4010374"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Call +91 - 0471 - 4010374
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProject;