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

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Hero />
      <ConditionsProcedures />
      <WhyChoose />
      <MeetDr />
      <TreatmentJourney />
      <PatientStories />
      <FAQ />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default Home;
