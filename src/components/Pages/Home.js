import React, { Component } from 'react';
import HeaderSlider from '../ImageSlider/HeadSlider';
import TwoCols from '../Sections/TwoColSection';
import FourCols from '../Sections/FourColSection';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLeaf, faUsers, faCalendar, faCog, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Testimonials from '../Sections/Testimonials';
import CallToAction from '../Common/CallToAction/CallToAction'

library.add(faEnvelope, faKey, faLeaf, faUsers, faCalendar, faCog, faQuoteLeft, faQuoteRight);

class Home extends Component {

  render() {
    return (
      <div>
        <HeaderSlider/>
        <TwoCols/>
        <FourCols/>
        <Testimonials/>
            <CallToAction
                title="Lets get your project started!"
                info="Need more information?"
                buttonTag="Request A Quote"
            />
      </div>
    );
  }
}

export default Home;
