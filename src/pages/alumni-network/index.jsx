import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AlumniHero from './components/AlumniHero';
import SuccessStories from './components/SuccessStories';
import IndustryDistribution from './components/IndustryDistribution';
import NetworkingEvents from './components/NetworkingEvents';
import MentorshipProgram from './components/MentorshipProgram';
import EntrepreneurshipShowcase from './components/EntrepreneurshipShowcase';
import AlumniDirectory from './components/AlumniDirectory';
import GivingBack from './components/GivingBack';

const AlumniNetwork = () => {
  return (
    <>
      <Helmet>
        <title>Alumni Network - AIML Branch | GM University</title>
        <meta name="description" content="Connect with 2,500+ AIML graduates working at top tech companies worldwide. Join our vibrant alumni network for mentorship, networking, and career opportunities." />
        <meta name="keywords" content="AIML alumni, GM University graduates, tech professionals, networking, mentorship, career opportunities" />
        <meta property="og:title" content="Alumni Network - AIML Branch | GM University" />
        <meta property="og:description" content="Connect with successful AIML graduates making breakthrough innovations at leading tech companies and startups globally." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/alumni-network" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <AlumniHero />
          <SuccessStories />
          <IndustryDistribution />
          <NetworkingEvents />
          <MentorshipProgram />
          <EntrepreneurshipShowcase />
          <AlumniDirectory />
          <GivingBack />
        </main>
      </div>
    </>
  );
};

export default AlumniNetwork;