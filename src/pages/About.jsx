import { FeedbackForm, SearchForm, Slider} from "../components";
import React from "react";
import {Info, InfoAbout} from "../components/Info";

const About = () => {

  return (
    <div className="container">
      {/*<h2>О нас</h2>*/}
      <SearchForm />
      <Info>
        <InfoAbout/>
      </Info>
      <FeedbackForm
        titleText="Развиваемся вместе с вами и ради вас, готовы обсудить новые функций, которые будут полезны для вашего бизнеса!"
        feedbackAbout
      />
      <Slider />
    </div>
  )
}

export default About