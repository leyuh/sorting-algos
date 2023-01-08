import React, { useState } from 'react';

interface BarProps {
    name: string;
    height: string;
    width: string;
    margin: string;
    status: number;
}

// STATUS: 0=NORMAL, 1=SELECTED, 2=SWAP, 3=COMPLETED

const Bar: React.FC<BarProps> = ({name, height, width, margin, status}: BarProps) => {

    return <span className="bar" id={name} style={{
        height: height,
        width: width,
        margin: margin,
        backgroundColor: (status == 3) ? "#62c45e" : (status == 2) ? "#992626" : (status == 1) ? "#79a0c7" : "#0b4c9d" 
    }}/>
}

export default Bar;