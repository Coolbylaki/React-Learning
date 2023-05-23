import React from 'react';

import './Modal.css';

const Modal = (props) => (
    <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
);

export default Modal;