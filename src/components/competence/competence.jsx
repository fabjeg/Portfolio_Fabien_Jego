import html from '../../assets/icons/HTML5.png';
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/sass.png";
import javascript from '../../assets/icons/javascript.webp';
import nodeJs from "../../assets/icons/node-js.png";
import react from "../../assets/icons/react-JS.png";
import redux from "../../assets/icons/Redux.png";
import reduxToolkit from "../../assets/icons/Redux-Toolkit.png";
import github from "../../assets/icons/github.png"
import mongodb from "../../assets/icons/mongodb.png"
import figma from "../../assets/icons/figma.png"
import "./style.css";

export function Competence() {


    const skills = [
        { src: html, alt: "HTML", text: "HTML5" },
        { src: css, alt: "CSS", text: "CSS3" },
        { src: sass, alt: "SASS", text: "SASS" },
        { src: javascript, alt: "JavaScript", text: "JavaScript" },
        { src: nodeJs, alt: "Node.js", text: "Node.js" },
        { src: react, alt: "React", text: "React" },
        { src: redux, alt: "Redux", text: "Redux" },
        { src: github, alt: "github", text: "github" },
        { src: mongodb, alt: "mongodb", text: "mongoDB" },
        { src: figma, alt: "Figma", text: "Figma" },
        { src: reduxToolkit, alt: "Redux Toolkit", text: "Toolkit" }
        
    ];

    return (
        <div className="title-competence section" >
            <h4 id='competences'>Compétences</h4>
            <div className="border-title"></div>
            <div className="container">
                <div className="container-icons">
                    {skills.map((skill, index) => (
                        <div key={index} className='icon-wrapper'>
                            <img src={skill.src} alt={skill.alt} className="icon-image"/>
                            <div className='icon-content'>{skill.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
