import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { Container } from 'reactstrap';
import DeckImage from '../../../../images/decks2.png'
import '../Modals.css';
import { deck2, deck3, deck4 } from '../../../../images';
  
const images = [DeckImage, deck2, deck3, deck4];
 
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
                <h3 className="modal-title">Decks</h3>
                <div  className="modal-frame">
                  <img
                      className="services-image" 
                      src={DeckImage} 
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