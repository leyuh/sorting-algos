import React, { useState } from 'react';

interface BarProps {
    name: string;
    height: string;
    width: string;
    margin: string;
}


const Bar: React.FC<BarProps> = ({name, height, width, margin}: BarProps) => {

    return <span className="bar" id={name} style={{
        height: height,
        width: width,
        margin: margin,
        backgroundColor: "#0b4c9d" 
    }}/>
}

export default Bar;