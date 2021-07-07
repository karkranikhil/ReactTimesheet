import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modalOverlay"></div>
          <div className="modalWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modalMain">
              <div className="modalHeader">
                <div className="modalCloseBtn"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
