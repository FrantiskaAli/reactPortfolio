import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faFaceLaughWink } from '@fortawesome/free-solid-svg-icons'

const laptop = <FontAwesomeIcon icon={faLaptopCode} />
const laughWink = <FontAwesomeIcon icon={faFaceLaughWink} />

function HomePage(){
    return (
        <section className="about" id="about">
    
    
        <article id="bio">
          <h1>Hi! I am Fran {laptop}</h1>
          <h3>front-end developer in making!</h3>
          <p>
            I am very hard-working result driven individual with passion for person-centred creative design and great attention to detail.
            I graduated front-end developmnet bootcamp and keep on finding projects to improve my skill set as much as possible.
            The main languages in my tech stack are JavaScript(includes React), and of course HTML/CSS. I’m a lifelong learner (about to take course of SQL).
            Along with all this enthusiasm for web dev I am also mother of two beautiful girls so no time for other hobbies at the moment.{laughWink}
          </p>
        </article>
        <article className="me"><img src="..." alt="..." width = " 300px" height="400px"/></article>
        </section>
    )
}


export default HomePage;