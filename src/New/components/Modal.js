import React from "react";
import ReactDOM from "react-dom";
import "../css/Modal.css";

function Modal({ isOpen, handleKeyUp, onClose, children, title }) {
  if (!isOpen) {
    return null;
  }

  const _handleKeyUp =
    handleKeyUp ||
    (e => {
      if (e.key === "Escape") onClose();
    });

  return ReactDOM.createPortal(
    <div
      className="Modal"
      onKeyUp={_handleKeyUp}
      onMouseDown={onClose}
      tabIndex="-1"
    >
      <div className="contenedor" onMouseDown={e => e.stopPropagation()}>
        <div className="header">
          <label>{title}</label>
          <button autoFocus="true" className="close" onClick={onClose}>
            x
          </button>
        </div>
        <div className="body">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
