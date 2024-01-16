import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import {urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then(data => {
        setAbouts(data)})
    .catch(error => console.log(error));
  }, [])
  

  // const abouts = [
  //   { title: 'Web Design', 
  //   description: 'Expert in creating visually stunning and user-friendly website interfaces, focusing on the aesthetics and layout to enhance the overall user experience.', imgUrl: images.about01 },
  //   { title: 'Frontend Developement', 
  //   description: 'Passionate about crafting seamless and interactive user interfaces, proficient in the latest frontend technologies to bring designs to life.', imgUrl: images.about02 },
  //   { title: 'backend Development', 
  //   description: 'Experienced in backend development, specializing in server-side logic and database management to ensure robust and efficient web applications.', imgUrl: images.about03 },
  //   { title: 'Web Animation', 
  //   description: 'Skilled animator dedicated to bringing websites to life through engaging and dynamic animations, enhancing user engagement and interactivity.', imgUrl: images.about04 },
  // ]

  return (
    <>
    <h2 className='head-text'>
       I Know that 
       <span> Good Development</span>
       <br/>
       means 
       <span> Good Business</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about, index)=>(
        
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={`about-${index}`}
        >
          <img src={urlFor(about.imgUrl)} alt="title" />
          <h2 className='bold-text' style={{margin: 20}}>{about.title}</h2>
          <p className='p-text' style={{margin: 10}}>{about.description}</p>
        </motion.div>
))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about")
  , 'about',
  "app__whitebg");