import React, { useState, useEffect } from 'react';

export function Horario() {
    const [horaAtual, setHoraAtual] = useState(new Date());
    useEffect(() => {
            setHoraAtual(new Date()), 1000
        });
    return (
        <>
            <h1>{horaAtual.toLocaleTimeString()}</h1>
        </>
    );
}
