import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Protected({Content}) {
    const navigate = useNavigate()


    return (
        <Content />
    );
}

export default Protected;