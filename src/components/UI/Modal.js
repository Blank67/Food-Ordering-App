import React from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={css.backdrop} />;
}

const ModalOverlay = (props) => {
    return (
        <div className={css.modal}>
            <div className={css.content}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
    );
};

export default Modal;