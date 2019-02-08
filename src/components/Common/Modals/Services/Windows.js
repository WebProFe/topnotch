import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import { Container} from 'reactstrap';
import WindowsImage from '../../../../images/windows.png'
import '../Modals.css';
import { windows1, windows2, windows3, windows4, windows5, windows6, windows7, windows8, windows9} from '../../../../images'
  
const images = [
  WindowsImage, windows1, windows2, windows3, windows4, windows5, windows6, windows7, windows8, windows9
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
                <h3 className="modal-title">Windows</h3>
                <div  className="modal-frame">
                  <img
                      className="services-image" 
                      src={windows9} 
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