  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  // Import components/pages
  import HomePage from './HomePage';
  import Header from './Header';

  // Services - Vaastu & Surveying
  import VaastuPlan from './VaastuPlan';
  import Surveying from './Surveying';
  import SurveyPlan from './SurveyPlan';
  import PlotSeparation from './PlotSeparation';
  import Approval from './Approval';
  import BuildingApproval from './BuildingApproval';

  // Services - Architectural Design & Visualization
  import ArchitecturalConceptPlanning from './ArchitecturalConceptPlanning';
  import ArchitecturalDrawings from './ArchitecturalDrawings';
  import ConstructionWorkingDrawings from './ConstructionWorkingDrawings';
  import FloorPlans3D from './FloorPlans3D';
  import ElevationInteriorViews from './ElevationInteriorViews';

  // Services - Engineering Design & Detailing
  import StructuralDesignDetailing from './StructuralDesignDetailing';
  import StructuralElectricalDrawings from './StructuralElectricalDrawings';
  import PlumbingLayoutDrawings from './PlumbingLayoutDrawings';
  import ElectricalLayoutPlans from './ElectricalLayoutPlans';
  import SectionalDetailDrawings from './SectionalDetailDrawings';

  // Services - Estimation & Financial
  import CostEstimationServices from './CostEstimationServices';
  import ConstructionBankEstimationReports from './ConstructionBankEstimationReports';
  import BankLoanAssistance from './BankLoanAssistance';

  import InternshipOpportunities from './InternshipOpportunities';

  import ClientOwnedLand from "./ClientOwnedLand";
  import RCCSteelStructures from "./RCCSteelStructures";
  import PEBDesignDetailing from "./PEBDesignDetailing";
  import StaircaseFabrication from "./StaircaseFabrication";
  import ElectricalPlumbingInstallations from "./ElectricalPlumbingInstallations";
  import PaintingWork from "./PaintingWork";

  import AmmoniaBlueprints from "./AmmoniaBlueprints";
  import PublicBuildingStabilityCertification from "./PublicBuildingStabilityCertification";
  import SiteInspections from "./SiteInspections";


  function App() {
    return (
      <Router>
        {/* Common Header for all pages */}
        <Header />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Vaastu & Surveying Services */}
          <Route path="/services/vaasthu" element={<VaastuPlan />} />
          <Route path="/services/surveying" element={<Surveying />} />
          <Route path="/services/survey-plan" element={<SurveyPlan />} />
          <Route path="/services/plot-separation" element={<PlotSeparation />} />
          <Route path="/services/approval" element={<Approval />} />
          <Route path="/services/building-approval" element={<BuildingApproval />} />

          {/* Architectural Design & Visualization Services */}
          <Route path="/services/architectural-concept-planning" element={<ArchitecturalConceptPlanning />} />
          <Route path="/services/architectural-drawings" element={<ArchitecturalDrawings />} />
          <Route path="/services/construction-working-drawings" element={<ConstructionWorkingDrawings />} />
          <Route path="/services/floor-plans-3d" element={<FloorPlans3D />} />
          <Route path="/services/elevation-interior-views" element={<ElevationInteriorViews />} />

          {/* Engineering Design & Detailing Services */}
          <Route path="/services/structural-design-detailing" element={<StructuralDesignDetailing />} />
          <Route path="/services/structural-electrical-drawings" element={<StructuralElectricalDrawings />} />
          <Route path="/services/plumbing-layout-drawings" element={<PlumbingLayoutDrawings />} />
          <Route path="/services/electrical-layout-plans" element={<ElectricalLayoutPlans />} />
          <Route path="/services/sectional-detail-drawings" element={<SectionalDetailDrawings />} />

          {/* Estimation & Financial Services */}
          <Route path="/services/cost-estimation" element={<CostEstimationServices />} />
          <Route path="/services/construction-bank-estimation" element={<ConstructionBankEstimationReports />} />
          <Route path="/services/bank-loan-assistance" element={<BankLoanAssistance />} />

          <Route path="/services/education/internship" element={<InternshipOpportunities />} />

          <Route path="/services/construction/client-land" element={<ClientOwnedLand />} />
          <Route path="/services/construction/rcc-steel" element={<RCCSteelStructures />} />
          <Route path="/services/construction/peb" element={<PEBDesignDetailing />} />
          <Route path="/services/construction/staircase" element={<StaircaseFabrication />} />
          <Route path="/services/construction/electrical-plumbing" element={<ElectricalPlumbingInstallations />} />
          <Route path="/services/construction/painting" element={<PaintingWork />} />

          <Route path="/services/inspection/ammonia" element={<AmmoniaBlueprints />} />
    <Route
            path="/services/inspection/certification"
            element={<PublicBuildingStabilityCertification />}
          />
  <Route path="/services/inspection/site" element={<SiteInspections />} />

        </Routes>
      </Router>
    );
  }

  export default App;
