import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCick = (index)=>{
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      });

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data)
      })

  }, [])

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
              <img src={urlFor(test?.imgurl)} alt=''/>
              <div className='app__testimonial-content'>
                <p className='p-text'>
                    {test.feedback}
                </p>
                  <div>
                    <h4 className='bold-text'>{test.name}</h4>
                    <h5 className='p-text'>{test.company}</h5>
                  </div>
              </div>
          </div>
          <div>
            <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={()=> handleCick(currentIndex === 0? testimonials.length-1 : currentIndex - 1)}>
                <HiChevronDoubleLeft/>
              </div>
              <div className='app__flex' onClick={()=> handleCick(currentIndex === testimonials.length-1? 0 : currentIndex + 1)}>
                <HiChevronDoubleRight/>
              </div>
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand)=>(
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__testimonial-brands-item'
            key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default Testimonial;
export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial")
  , 'testimonial',
  "app__primarybg");