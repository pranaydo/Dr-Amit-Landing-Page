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

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MeetDr />
      <ConditionsProcedures />
      <WhyChoose />
      <PatientStories />
      <TreatmentJourney />
      <FAQ />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default Home;
