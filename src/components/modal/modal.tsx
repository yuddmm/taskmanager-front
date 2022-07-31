import { ReactNode } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './modal.scss';

interface IProps {
  children?: ReactNode;
  open: boolean;
  title: string;
  onClose(): void;
}

const Modal = (props: IProps) => {
  if (props.open) {
    return (
      <div className="modalOverlay" onClick={() => props.onClose()}>
        <div className="modalWrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader">
            <div className="modalHeaderContainer container">
              <div className="modalHeaderTitle">{props.title}</div>
              <div className="modalHeaderClose" onClick={() => props.onClose()}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <div className="modalContent">{props.children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
