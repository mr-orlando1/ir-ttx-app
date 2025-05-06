// frontend/src/components/MotionLayout.tsx
import React, { FC, ReactNode } from 'react';
-import { motion, AnimatePresence } from 'framer-motion';
+import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface MotionLayoutProps {
  children: ReactNode;
}

const MotionLayout: FC<MotionLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
-    <AnimatePresence exitBeforeEnter>
+    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionLayout;
