import React from 'react';
import '../styles/loader.css';
function Loader(props) {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    );
}

export default Loader;