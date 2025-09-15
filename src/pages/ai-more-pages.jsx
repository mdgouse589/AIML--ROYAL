// pages/ai-more-pages.jsx
import React from "react";
import AdmissionsGateway from './admissions-gateway';
import AlumniNetwork from './alumni-network';
import ContactSupport from './contact-support';
import IQACDocumentation from './iqac-documentation';
import StudentProjectsInnovation from './student-projects-innovation';

const AIMorePages = () => {
  return (
    <div>
      <AdmissionsGateway />
      <AlumniNetwork />
      <ContactSupport />
      <IQACDocumentation />
      <StudentProjectsInnovation />
    </div>
  );
};

export default AIMorePages;
