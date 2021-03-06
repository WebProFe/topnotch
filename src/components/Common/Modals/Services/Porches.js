import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { Container } from 'reactstrap';
import PorsheImage from '../../../../images/slide3.png'
import '../Modals.css'
import { porche1, porche2, porche3 } from '../../../../images';
  
const images = [PorsheImage, porche1, porche2, porche3];
 
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
                <h3 className="modal-title">Porches</h3>
                <div  className="modal-frame">
                  <img
                      className="services-image" 
                      src={PorsheImage} 
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