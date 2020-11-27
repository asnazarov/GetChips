import {AboutSection, FeedbackForm, SearchForm, Slider} from "../components";
import React from "react";

const About = () => {

  return (
    <div className="container">
      {/*<h2>О нас</h2>*/}
      <SearchForm />
      <AboutSection />
      <FeedbackForm
        titleText="Развиваемся вместе с вами и ради вас, готовы обсудить новые функций, которые будут полезны для вашего бизнеса!"
      />
      <Slider />
    </div>
  )
}

export default About