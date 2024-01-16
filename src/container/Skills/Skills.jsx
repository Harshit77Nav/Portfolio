import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Tooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css"
import './Skills.scss';

const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data)
      })

  }, [])
  return (
    <>
      <h2 className='head-text'>
        Skills & Experience
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skills) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skills.name}
            >
              <div className='app__flex' style={{ backgroundColor: skills.bgColor }}>
                <img src={urlFor(skills.icon)} alt={skills.name} />
              </div>
              <p className='p-text'>{skills.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>
                  {experience.year}
                </p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works?.map((work) => (  
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>
                        {work.name}
                        <p className='p-text'>{work.company}</p>
                      </h4>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="skills-tooltip"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

// export default AppWrap(Skills);
export default AppWrap(
  MotionWrap(Skills, "app__skills")
  , 'skills',
  "app__whitebg");