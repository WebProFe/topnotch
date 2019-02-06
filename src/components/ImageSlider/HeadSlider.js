import React, {Component} from "react";
import "./HeaderSlider.css"
import SlideShow from "./SlideShow";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class HeaderSlider extends Component{

    render(){
        return(
            <div className="hero-image">
                <SlideShow/>
                <div className="hero-cover">
                    <div className="text-block">
                        <h1>Carpentry Services</h1>
                        <h4>Since 2002</h4>
                        <Link to="/contact"><Button className="button" color="warning"> Request A Quote</Button></Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default HeaderSlider;