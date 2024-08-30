import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/Harshit77Nav?tab=repositories' >
            <BsGithub/>
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/we_2_exist/'>
            <BsInstagram/>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/harshit-navneet-37557599/'>
            <FaLinkedinIn/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia