import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
    children: React.ReactNode;
}

export default function AnimatedTitle({ children }: AnimatedTitleProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
            {children}
        </motion.h2>
    );
}
