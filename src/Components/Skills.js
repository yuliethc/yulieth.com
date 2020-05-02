import React from 'react';
import "./css/Skills.css"
const Skills = (props) => {
    return (
        <span className="skills__container">
            {props.Name}
        </span>
    );
};

export default Skills;