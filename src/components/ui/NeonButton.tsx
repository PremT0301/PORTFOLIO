import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    glowColor?: 'blue' | 'cyan' | 'purple';
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function NeonButton({
    variant = 'primary',
    glowColor = 'blue',
    children,
    icon,
    className = '',
    ...props
}: NeonButtonProps) {

    const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-neon-cyan border border-transparent",
        secondary: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-cyan-600 hover:shadow-neon-blue",
        outline: "bg-transparent text-blue-600 dark:text-cyan-400 border-2 border-blue-600 dark:border-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-900/10 hover:shadow-neon-cyan"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
}
