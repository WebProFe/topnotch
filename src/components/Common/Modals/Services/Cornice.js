import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { Container } from 'reactstrap';
import CorniceImage from '../../../../images/cornice1.png';
import CorniceImage4 from '../../../../images/cornice4.png';
import CorniceImage3 from '../../../../images/cornice3.png';
import CorniceImage2 from '../../../../images/cornice2.png';

import '../Modals.css'
  
const images = [
  CorniceImage, CorniceImage2, CorniceImage3, CorniceImage4
];
 
class Framing extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <Container fluid>
                <h3 className="modal-title">Cornice</h3>
                <div  className="modal-frame">
                  <img
                      className="services-image" 
                      src={CorniceImage} 
                      type="button" 
                      onClick={() => this.setState({ isOpen: true })} 
                      alt="Framing" 
                  />
                </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Container>
    );
  }
}

export default Framing;