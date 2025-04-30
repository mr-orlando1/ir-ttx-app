
import React from 'react';
import { motion } from 'framer-motion';

const InjectCard = ({ title, content }) => {
  return (
    <motion.div
      className="inject-card"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h4 className="font-bold text-lg mb-2">💥 {title}</h4>
      <p>{content}</p>
    </motion.div>
  );
};

export default InjectCard;
