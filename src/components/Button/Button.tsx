import './Button.scss';

import React from 'react';

interface ButtonProps {
    /**
     * the label/title for the button
     */
    children: string;
    /**
     * click handler for the button
     */
    onClick?: () => void;
    /**
     * The color of the component.
     * @default 'default'
     */
    color?: 'primary' | 'secondary' | 'default'
}

/**
 * reusable button component
 */
function Button(props: ButtonProps) {
    const { 
        color = 'default',
        children, 
        onClick,
     } = props;

     return (
         <button
             className={`button button--${color}`}
             onClick={onClick}
         >
             {children}
         </button>  
     );
};

export { Button };