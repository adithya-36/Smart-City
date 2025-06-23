import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const strategies = [
  {
    title: "Improving basic services",
    description: `Basic Services include water, sanitation and waste management. Emphasis is placed on equitable access to these urban basic services, especially for the poor. It promotes the development of clean, energy efficient, affordable, and human-centered design that can deliver better services to citizens, while at the same time make the most effective use of natural resources and cutting down on fossil fuel reliance and energy consumption.`,
    goals: [
      "GOAL 01: 100% coverage of 24x7 water supply & optimization of water usage through smart water network.",
      "GOAL 02: 100% coverage of roadside storm water drains along with regular cleaning & maintenance of the major drains.",
      "GOAL 03: Provide adequate public toilets in key public & commercial areas.",
      "GOAL 04: Ensure a clean city through integrated collection, transportation & management of solid waste.",
      "GOAL 05: Improve service delivery of public utilities & services."
    ]
  },
  {
    title: "Streamlining service delivery & governance",
    description: `Ensuring the delivery of services through enabling transparency and improving accountability`,
    goals: [
      "GOAL 07: Ensure open, accountable & responsible governance",
      "GOAL 08: Improve inter-department co-ordination for services",
    ]
  },
  {
    title: "Creating a well-connected, safe & accessible city centre",
    description: `Thiruvananthapuram City caters to a large district, city & tourist population, a majority of which frequent the city centre, travel to & from work, access healthcare, partake in tourism, entertainment & recreation. To ensure that residents & tourists can experience an increased quality of life, the city aims to improve mobility & connectivity through actions that will contribute to a safe, accessible & convenient transportation network that promotes green space in urban areas to make the city a more pleasant & accessible place to live & work.
    A well balanced multi-modal transportation network facilitates the ability of people to move within, around, in & out of the city. Diversifying the methods by which people can get around is an important element of a healthy, sustainable & prosperous Thiruvananthapuram.`,
    goals: [
      "GOAL 09:  Create better planned parking facilities",
      "GOAL 10: Ensure encroachment free & continuous pathways/walkways",
      "GOAL 11: Improve traffic discipline",
      "GOAL 12: Make the city easily Navigable & Legible by all groups of people",
      "GOAL 13: Promote & encourage a shift from Private vehicles to Public Transport",
      "GOAL 14: Reduce traffic congestion & frequency of road accidents",
      "GOAL 15: Create an atmosphere of being & feeling safe through surveillance & street lighting",
      "GOAL 16: Enable a universally accessible & convenient transportation network",
    ]
  },
  {
    title: "Re-densification with creative land-use",
    description: `Maximizing and optimizing government land in the city centre through densification and housing varied activities and programs.`,
    goals: [
      "GOAL 17: Encourage a diverse land-use mix",
      "GOAL 18: Plan, build & upgrade infrastructure to support growth & urban intensification."
    ]
  },
  {
    title: "Celebrating & conserving historic & cultural assets",
    description: `Celebration of culture will be a catalyst for economic development, community engagement, participation, & social cohesion`,
    goals: [
      "GOAL 19:  Create & re-adapt spaces to celebrate the city's cultural identity",
      "GOAL 20: Restore & upgrade structures of historic importance"
    ]
  },
  {
    title: "Leveraging educational institutions & tourism potential",
    description: `Developing expertise for local tourism businesses & hospitality services is central to optimizing the value of tourism in Thiruvananthapuram. Communities with rich cultural heritage & craft skills will be equipped with entrepreneurship & business management skills to assist them in growing their businesses & Thiruvananthapuram’s cultural attractions. The city aims to promote cultural & heritage tourism, together with local communities, by implementing community-inclusive business models.`,
    goals: [
      "GOAL 21:  Create & re-adapt spaces to celebrate the city's cultural identity. Expand & leverage the tourism, service industry & hospitality sectors",
      "GOAL 22:  Work with business & universities to support talent creation & innovation"
    ]
  },
  {
    title: "Enabling disaster mitigation",
    description: `By supporting and strengthening community-led disaster risk reduction actions and increasing institutional adaptive capacity, the city will support all of Thiruvananthapuram’s residents to better adapt to natural-human hazards and the increasing risks posed by climate change. While identifying & planning for foreseeable risks is an important part of disaster risk reduction, we will also build resilience in our infrastructure so that they can withstand a range of shocks & stresses, even those that are unforeseen.`,
    goals: [
      "GOAL 23: Mitigate flooding via canals in core city areas",
      "GOAL 24: Set up faster emergency response systems"
    ]
  },
  {
    title: "Encouraging active living & healthy communities",
    description: `We will work to promote & facilitate the benefits of a healthy lifestyle, through infrastructure change & engagement with the community.`,
    goals: [
      "GOAL 25: Prevent the occurrence of mosquito-borne diseases",
      "GOAL 26: Promote active living & getting outside"
    ]
  },
  {
    title: "Facilitating sustainable built & natural landscapes",
    description: `There is a growing importance for people & municipalities when it comes to protecting the environment & better understanding the impact & implications of environmental issues. Acting now by preserving the natural environment, reducing our carbon footprint & building the city in an environmentally sound manner, will benefit future generations.`,
    goals: [
      "GOAL 27: Promote & Encourage environmentally friendly urbanization"
    ]
  },
  {
    title: "Promoting diversity & fostering inclusiveness",
    description: `There is a growing importance for people & municipalities when it comes to protecting the environment & better understanding the impact & implications of environmental issues. Acting now by preserving the natural environment, reducing our carbon footprint & building the city in an environmentally sound manner, will benefit future generations.`,
    goals: [
      "GOAL 28: Promote & Encourage inclusiveness and community participation"
    ]
  },
];

const PlanningAndDevelopmentSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#184E77]">
          Planning and Development Strategies
        </h1>

        <div className="space-y-2">
          {strategies.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <button
                  className={`w-full text-left px-6 py-5 flex justify-between items-center transition duration-200 ${
                    isOpen ? 'bg-[#1E6091] text-white' : 'bg-white hover:bg-gray-100 text-gray-800'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  {isOpen ? (
                    <MdKeyboardArrowUp className="text-2xl transition-transform duration-200" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="text-2xl transition-transform duration-200" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700">
                    <p className="mb-4 text-gray-600">{item.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {item.goals.map((goal, i) => (
                        <li key={i} className="ml-4">{goal}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlanningAndDevelopmentSection;