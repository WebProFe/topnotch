import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { Container } from 'reactstrap';
import FramingImage from '../../../../images/slide1.png'
import '../Modals.css'
  
const images = [
  FramingImage
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
                <h3 className="modal-title">Framing</h3>
                <img
                    className="services-image" 
                    src={FramingImage} 
                    type="button" 
                    onClick={() => this.setState({ isOpen: true })} 
                    alt="Framing" 
                />
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