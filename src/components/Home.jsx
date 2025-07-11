import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import MeetDr from "./MeetDr";
import ConditionsProcedures from "./ConditionsProcedures";
import WhyChoose from "./WhyChoose";
import PatientStories from "./PatientStories";
import TreatmentJourney from "./TreatmentJourney";
import FAQ from "./FAQ";
import BookConsultation from "./BookConsultation";
import Banner from "./Banner";
import FloatingButtons from "./Floating";

const Home = () => {
  return (
    <div>
      <FloatingButtons />
      <Header />
      <Banner />
      <Hero />
      <ConditionsProcedures />
      <WhyChoose />
      <MeetDr />
      <Hero isMiddleHero={true} />

      <TreatmentJourney />
      <PatientStories />
      <FAQ />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default Home;
