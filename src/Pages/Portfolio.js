import React, { Component } from 'react';
import "./styles/Portfolio.css"
import Project from '../Components/Project';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
               <span>Work</span> 
               <section className="work__container">
                   <Project
                   Title="Proyecto 1"
                   Content="blah blah blah"
                   Web="www.yulieth.com"
                   ></Project>
                    <Project
                   Title="Proyecto 2"
                   Content="blah blah blah"
                   Web="www.yulieth.com"
                   ></Project>
                    <Project
                   Title="Proyecto 3"
                   Content="blah blah blah"
                   Web="www.yulieth.com"
                   ></Project>
                    <Project
                   Title="Proyecto 3"
                   Content="blah blah blah"
                   Web="www.yulieth.com"
                   ></Project>
               </section>
            </div>
        );
    }
}

export default Portfolio;