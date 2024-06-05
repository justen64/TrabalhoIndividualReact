import React, { useState, useEffect } from 'react';

export function Cor(){
    const cores = ['red', 'violet', 'blue', 'yellow'];
    const [bgColor, setBgColor] = useState(cores[0]);
    const [index, setIndex] = useState(0);

    function mudarCor() {
        const novoIndex = (index + 1);
        setIndex(novoIndex);
        setBgColor(cores[novoIndex]);
        if(index > 3)setIndex(0);
    }

    useEffect(() =>{
        document.body.style.background = bgColor;
    }, [bgColor]);

    return(
        <>
        <button onClick={mudarCor}>Mudar cor de fundo</button>
        </>
    )
}