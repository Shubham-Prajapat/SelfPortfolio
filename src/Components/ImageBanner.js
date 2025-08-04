import React from 'react'
import myimg from '../assest/shubhbg-remove.png'
const ImageBanner = () => {
  return (
    <div className='image-banner'>
       <div className='image-banner-container'>
            <div className='image-column'>
              <img src={myimg} alt='banner' />
            </div>
            <div className='content-column'>
                <h1 className='title-heading'>Mr. Shubham Prajapat</h1>
                <p>Web Developer</p>
                <span className='dev-lang'>Shopify, React Js</span>
            </div>
       </div>
    </div>
  )
}

export default ImageBanner;


// Dyanamic code for image banner

// import React from 'react';
// import { motion } from 'framer-motion';

// const ImageBanner = ({ image, name, role, skills }) => {
//   return (
//     <div className='image-banner'>
//       <div className='image-banner-container'>
//         <motion.div 
//           className='image-column'
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <img src={image} alt='banner' className='banner-image' />
//         </motion.div>

//         <motion.div 
//           className='content-column'
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           <h1 className='title-heading'>{name}</h1>
//           <p>{role}</p>
//           <span className='dev-lang'>{skills}</span>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ImageBanner;


// import React from 'react';
// import ImageBanner from './ImageBanner';
// import myimg from '../assest/Shubh11.png';

// const HomePage = () => {
//   return (
//     <ImageBanner 
//       image={myimg} 
//       name="Mr. Shubham Prajapat" 
//       role="Web Developer" 
//       skills="Shopify, React JS"
//     />
//   );
// };

// export default HomePage;
