// frontend/src/components/InputWithFocus.tsx
import React, { FC, InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

const InputWithFocus: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <motion.input
    {...(props as any)}                     // ← cast to any to avoid the onDrag mismatch
    className={
      'border border-gray-300 focus:border-blue-500 focus:outline-none px-3 py-2 rounded ' +
      (props.className || '')
    }
    whileFocus={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  />
);

export default InputWithFocus;