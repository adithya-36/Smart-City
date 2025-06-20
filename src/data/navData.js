import { href } from "react-router-dom";

const navigation = [
    {
      name: 'Home',href:'/',
      dropdown: [
        { name: 'City Profile', href: '/CityProfile' },
        { name: `What is a 'Smart City'`, href: '/SmartCityDef' },
        { name: `About 'Smart City Mission'`, href: '/MissionAbout' },
        { name: 'Smart Cities Challenge', href: '/MissonChallenge' },
        { name: 'Vision & Strategy', href: '/MissonVision' },
        { name: 'Project Milestones', href: '/ProjectMilestone' },
      ],
    },
    {
      name: 'SCTL',
      dropdown: [
        { name: 'Creation of SPV', href: '#' },
        { name: 'Special Purpose Vehicle', href: '#' },
        { name: 'Consultant (PMC)', href: '/pmc_consultant' },
        { name: 'Project Funds', href: '/funds' },
        { name: 'Financials', href: '/financials' },
      ],
    },
    {
      name: 'Projects',href:'/Projects',
      dropdown: [
        { name: 'ABD Projects', href: '/ABDProject' },
        { name: 'Pancity Projects', href: '/PancityProject' },
        { name: 'CITIIS 2.0', href: '/citiis' },
        { name: 'MPR', href: '/MPR' },
        { name: 'Ongoing Projects', href: '/OngoingProject' },
        { name: 'Completed Projects', href: '/CompletedProject' },
        { name: 'SCTL Project', href: '/SCTLProject' },
      ],
    },
    {
      name: 'Tenders',href:'/Tenders',
    },
    {
      name: 'Events',
      dropdown: [
        { name: 'AKAM 2021', href: '#' },
        { name: 'Conclave', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Media Coverage', href: '#' },
        { name: '8th Anniversary of Smartcity Mission', href: '#' },
        { name: 'Inauguration', href: '#' },
        { name: 'Ente Keralam', href: '/EnteKeralam' },
      ],
    },
    {
      name: 'Gallery',
      dropdown: [
        { name: 'Photo Gallery', href: '/photoGallery' },
        { name: 'Video Gallery', href: '/videoGallery' },
      ],
    },
    {
      name: 'Downloads',
      dropdown: [
        { name: `Government Order's(GO's)`, href: '/GovernmentOrders' },
      ],
    },
    {
      name: 'Careers',href:'/careers',
      dropdown: [
        { name: 'Internships', href: '/internship' },
        { name: 'Tulip internship', href: '/tulip-internship' },
      ],
    },
    {
      name: 'Covid19',
      dropdown: [
        { name: 'Dashboard', href: '#' },
        { name: 'Quick Response Team:Zone-2', href: '#' },
        { name: 'Containment Zones', href: '#' },
        { name: 'SCTL Initiatives', href: '#' },
      ],
    },
    {
      name: 'Contact Us',href:'/ContactUs',
      dropdown: [
        { name: 'Register a Complaint', href: '/registerComplaint' },
        { name: 'Poll', href: '/poll' },
        { name: 'RTI', href: '/RTI' },
      ],
    },
    {/*{
      name: 'BI - Dashboard',
      dropdown: [
        { name: 'Mosquito Density System', href: '#' },
        { name: 'Covid', href: '#' },
        { name: 'E-Mobility', href: '#' },
        { name: 'LEIP', href: '#' },
        { name: 'GIS', href: '#' },
      ],
    },*/}


  ];
export default navigation;