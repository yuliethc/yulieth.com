import React, { Component } from 'react';
import "./styles/AboutMe.css";
import me from "./../src/img/me.jpg"

class AboutMe extends Component {
    render() {
        return (
            <div className="about__me">
               
                <div className="about__me_principal">
                    <div className="about__me_imagen-container">
                        <img src={me} alt=""/>
                    </div>
                    <div>
                    Get to know me
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;