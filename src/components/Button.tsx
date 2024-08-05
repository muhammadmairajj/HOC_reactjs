import React from 'react';

interface ButtonProps {
    label: string;
    styles?: React.CSSProperties; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ label, styles, onClick }) => {
    return <button style={styles} onClick={onClick}>{label}</button>;
};