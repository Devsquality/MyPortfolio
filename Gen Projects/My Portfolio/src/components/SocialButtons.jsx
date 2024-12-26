import React from "react";
import { motion } from "framer-motion";
import { socialIcons } from "./data/config";
export default function SocialButtons() {
  const animationDuration = 4;
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
        strokeOpacity: {
          delay: animationDuration,
        },
        fillOpacity: {
          delay: animationDuration,
        },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.3 },
      },
    },
  };

  return (
    <div
      className="md:flex flex-col items-center justify-center border border-primary bg-[#ffffff29] 
    rounded-3xl space-y-11 p-3 max-h-[506px] md:max-h-[386px] hidden "
    >
      {socialIcons.map((icon) => (
        <button key={icon.id}>
        <a href='https://www.linkedin.com/in/omotayo-ibrahim0804/' target='_blank' rel='noopener noreferrer'>
        <svg viewBox='0 0 24 24' width={40} height={40}>
          <motion.path
            d='M4.98 3.5C4.98 2.12 6.1 1 7.5 1s2.5 1.12 2.5 2.5S8.9 6 7.5 6 4.98 4.88 4.98 3.5zM2 9h5v12H2V9zm7.5 0H14v1.75h.06c.58-1.1 2-2.25 4.19-2.25C21.8 8.5 24 10.25 24 13.94V21H19V14.5c0-1.53-.3-2.72-1.85-2.72-1.82 0-2.6 1.3-2.6 2.72V21h-4.1V9z' 
            fill='#FFC107' 
            stroke='#FFC107' 
            strokeWidth={1} 
            variants={variants} 
            initial='initial' 
            animate='animate' 
            whileHover='hover' 
          />
        </svg>
      </a>
      </button>
      ))}
      {socialIcons.map((icon) => (
        <button key={icon.id}>
        <a href='https://github.com/Devsquality' target='_blank' rel='noopener noreferrer'>
        <svg viewBox='0 0 24 24' width={40} height={40}>
          <motion.path
            d='M8 0C3.578 0 0 3.578 0 8c0 3.536 2.292 6.537 5.468 7.589.4.074.547-.173.547-.384 0-.191-.007-.695-.01-1.365-2.226.484-2.698-1.073-2.698-1.073-.364-.923-.889-1.168-.889-1.168-.726-.496.055-.486.055-.486.803.056 1.225.826 1.225.826.712 1.218 1.868.866 2.32.662.072-.516.278-.866.506-1.065-1.776-.203-3.645-.888-3.645-3.943 0-.87.313-1.583.829-2.141-.083-.203-.36-1.024.078-2.134 0 0 .67-.215 2.2.82.637-.177 1.32-.265 2.004-.268.685.003 1.368.09 2.005.268 1.53-1.035 2.2-.82 2.2-.82.439 1.11.162 1.931.079 2.134.517.558.829 1.271.829 2.141 0 3.063-1.872 3.74-3.653 3.943.288.246.541.733.541 1.479 0 1.067-.01 1.932-.01 2.194 0 .211.144.462.552.384C13.708 14.537 16 11.536 16 8c0-4.422-3.578-8-8-8z'
            fill='#FFC107' 
            stroke='#FFC107' 
            strokeWidth={1} 
            variants={variants} 
            initial='initial' 
            animate='animate' 
            whileHover='hover' 
          />
        </svg>
        </a>
        </button>
      ))}
    </div>
  );
}
{/* // <button key={icon.id}>
        //   <svg viewBox={icon.viewBox} width={40} height={40}>
        //     <motion.path */}
        {/* //       d={icon.path}
        //       fill="#FFC107"
        //       stroke="#FFC107"
        //       strokeWidth={1}
        //       variants={variants}
        //       initial="initial"
        //       animate="animate"
        //       whileHover="hover"
        //     />
        //   </svg> */}