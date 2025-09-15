import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

// Routes from first file
import AlumniNetwork from './pages/alumni-network';
import ContactSupport from './pages/contact-support';
import IQACDocumentation from './pages/iqac-documentation';
import StudentProjectsInnovation from './pages/student-projects-innovation';
import AdmissionsGateway from './pages/admissions-gateway';

// Routes from second file
import ResearchInnovationCenter from './pages/research-innovation-center';
import Homepage from './pages/homepage-royal-academic-portal';
import AboutDepartmentPage from './pages/about-department-academic-heritage';
import FacultyConstellation from './pages/faculty-constellation-distinguished-educators';
import ProgramsCoursesAcademicExcellenceHub from './pages/programs-courses-academic-excellence-hub';
import StudentSuccessGallery from './pages/student-success-gallery-achievement-showcase';
import AIMorePages from './pages/ai-more-pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Routes from first file */}
          <Route path="/" element={<AdmissionsGateway />} />
          <Route path="/alumni-network" element={<AlumniNetwork />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/iqac-documentation" element={<IQACDocumentation />} />
          <Route path="/student-projects-innovation" element={<StudentProjectsInnovation />} />
          <Route path="/admissions-gateway" element={<AdmissionsGateway />} />

          {/* Routes from second file */}
          <Route path="/research-innovation-center" element={<ResearchInnovationCenter />} />
          <Route path="/homepage-royal-academic-portal" element={<Homepage />} />
          <Route path="/about-department-academic-heritage" element={<AboutDepartmentPage />} />
          <Route path="/faculty-constellation-distinguished-educators" element={<FacultyConstellation />} />
          <Route path="/programs-courses-academic-excellence-hub" element={<ProgramsCoursesAcademicExcellenceHub />} />
          <Route path="/student-success-gallery-achievement-showcase" element={<StudentSuccessGallery />} />
          <Route path="/ai-more" element={<AIMorePages />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
