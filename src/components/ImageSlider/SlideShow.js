import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import slide1 from "../../images/slide1.png"
import slide2 from "../../images/slide2.png"
import slide3 from "../../images/slide3.png"

const items = [
  {
    src: `${slide1}`,
    altText: 'Slide 1',
    header: 'Restorations on all types of models'
  },
  {
    src: `${slide2}`,
    altText: 'Slide 2',
    header: 'We are OSHA Certified'
  },
  {
    src: `${slide3}`,
    altText: 'Slide 3',
    header: 'We work on all types of decks'
  }
];

const SlideShow = () => <UncontrolledCarousel items={items} controls={false} />;

export default SlideShow;
