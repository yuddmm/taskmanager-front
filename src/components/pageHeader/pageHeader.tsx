import { ReactNode } from 'react';
import classNames from 'classnames';
import './pageHeader.scss';

interface IProps {
  title: string;
  renderButton?(): ReactNode;
}

const PageHeader = (props: IProps) => {
  const getStyleForHeader = () => {
    const style = ['pageHeader'];
    if (props.renderButton) {
      style.push('withButton');
    }
    return style;
  };

  return (
    <div className={classNames(getStyleForHeader())}>
      <div className="title">{props.title}</div>
      <div className="headerButton">
        {props.renderButton && props.renderButton()}
      </div>
    </div>
  );
};

export default PageHeader;
