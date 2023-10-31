import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// this is our reusable componenet for the pages of our app //

export const HomeCard = ({ color, heading, path, delay, image, size }) => {
  return (
    <motion.div
      className="home-card d-flex"
      style={{ boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.5)",border:"black 2px solid"}}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <NavLink to={path} className="home-card-heading">
        <div>
          <h1>{heading}</h1>
        </div>
      </NavLink>
      <div className="home-img">
        <img src={image} alt="" width={size ? size : ""} />
      </div>
    </motion.div>
  );
};
