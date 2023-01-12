import React, { useState } from 'react';

interface BarProps {
    name: string;
    height: string;
    width: string;
    margin: string;
    mode: number;
}


const Bar: React.FC<BarProps> = ({name, height, width, margin, mode}: BarProps) => {

    return <span className="bar" id={name} style={{
        height: height,
        width: width,
        margin: margin,
        backgroundColor: mode == 0 ? "#0b4c9d" : mode == 1 ? "#5a98e8" : "#ad2d2d"
    }}/>
}

export default Bar;