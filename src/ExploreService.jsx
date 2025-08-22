import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreService.css';


const servicesData = [
  {
    icon: '🧱',
    title: 'Planning & Government Approvals',
    subtitle: 'For clients who are just starting — this is where it all begins.',
     features: [
      { text: 'Vastu-Compliant Building Plans', link: '/services/vaasthu' },
      { text: 'Land Surveying Services', link: '/services/surveying' },
      { text: 'Survey Plan Preparation', link: '/services/survey-plan' },
      { text: 'Plot Separation Services', link: '/services/plot-separation' },
      { text: 'Government Plot Approval Assistance', link: '/services/approval' },
      { text: 'Building Plan Approval (Corporation / Panchayat)', link: '/services/building-approval' },
    ],
  },
  {
    icon: '🏛️',
    title: 'Architectural Design & Visualization',
    subtitle: 'Turning ideas into blueprints and immersive 3D visuals.',
    features: [
  { text: 'Concept Planning', link: '/services/architectural-concept-planning' },
  { text: 'Architectural Drawings', link: '/services/architectural-drawings' },
  { text: 'Construction Working Drawings', link: '/services/construction-working-drawings' },
  { text: 'Floor Plans & 3D Views', link: '/services/floor-plans-3d' },
  { text: 'Elevation & Interior Views', link: '/services/elevation-interior-views' },
]
  },
  {
    icon: '🧠',
    title: 'Engineering Design & Detailing',
    subtitle: 'Technical design to make your structure strong, safe, and build-ready.',
    features: [
    { text: 'Structural Design and Detailing', link: '/services/structural-design-detailing' },
    { text: 'Structural and Electrical Drawings', link: '/services/structural-electrical-drawings' },
    { text: 'Plumbing Layout Drawings', link: '/services/plumbing-layout-drawings' },
    { text: 'Electrical Layout Plans', link: '/services/electrical-layout-plans' },
    { text: 'Sectional Detail Drawings', link: '/services/sectional-detail-drawings' },
  ]
  },
  {
  icon: '💰',
  title: 'Estimation & Financial Services',
  subtitle: 'For planning your project budget and securing funding.',
  features: [
    { text: 'Cost Estimation Services', link: '/services/cost-estimation' },
    { text: 'Construction & Bank Estimation Reports', link: '/services/construction-bank-estimation' },
    { text: 'Bank Loan Assistance', link: '/services/bank-loan-assistance' },
  ],
},

  {
    icon: '🏗️',
    title: 'Construction & Execution',
    subtitle: 'Time to bring the project to life on your land.',
    features: [
    { text: 'Construction on Client-Owned Land', link: '/services/construction/client-land' },
    { text: 'RCC and Steel Structures, Roof Trusses', link: '/services/construction/rcc-steel' },
    { text: 'PEB (Pre-Engineered Building) Design and Detailing', link: '/services/construction/peb' },
    { text: 'Steel and Spiral Staircase Fabrication', link: '/services/construction/staircase' },
    { text: 'Electrical and Plumbing Installations', link: '/services/construction/electrical-plumbing' },
    { text: 'Whitewash and Color Paint Work', link: '/services/construction/painting' },
  ],
  },
  {
    icon: '📋',
    title: 'Inspection, Certification & Documentation',
    subtitle: 'Stay compliant, safe, and certified at every stage.',
    features: [
      { text: 'Ammonia Blueprints', link: '/services/inspection/ammonia' },
      { text: 'Public Building Stability Certification', link: '/services/inspection/certification' },
      { text: 'Site Inspections (Stability, Rebar Checking, Renovation)', link: '/services/inspection/site' },
    ],
  },
  {
    icon: '📚',
    title: 'Education & Training',
    subtitle: 'Empowering the next generation of civil engineers.',
     features: [
    { text: 'Internship Opportunities for Civil Engineering Students', link: '/services/education/internship' },
  ],
  },
];


const ExploreService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [areAwardsVisible, setAreAwardsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
    setTimeout(() => setAreAwardsVisible(true), 400);
  }, []);

  return (
    <section className="explore-service">
      <h2 className="section-heading">
        Explore Our Services
        <span className="underline" />
      </h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card fade-in ${isVisible ? 'fade-in' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
            role="button"
            tabIndex={0}
          >
            <div className="icon">{service.icon}</div>
            <div className="title">{service.title}</div>
            <div className="description">{service.subtitle}</div>
            <ul className="features">
              {service.features.map((item, i) => (
                <li key={i}>
                  {item.link.startsWith('/services') ? (
                    <Link to={item.link} onClick={(e) => e.stopPropagation()}>{item.text}</Link>
                  ) : (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>{item.text}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-heading">
        Our Awards
        <span className="underline" />
      </h2>
     
    </section>
  );
};

export default ExploreService;
