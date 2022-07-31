import { ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import './button.scss';

interface IProps {
  children?: ReactNode;
  onClick(): void;
  outlined?: boolean;
  color: 'blue' | 'red' | 'green' | 'transparent';
  disabled?: boolean;
}

const Button = (props: IProps) => {
  const getClassName = useCallback(() => {
    const classnameList = ['button'];
    classnameList.push(props.color);
    if (props.disabled) {
      classnameList.push('disabled');
    }
    if (props.outlined) {
      classnameList.push('outlined');
    }

    return classnameList;
  }, [props.disabled, props.outlined, props.color]);

  return (
    <button
      onClick={() => props.onClick()}
      disabled={props.disabled}
      className={classNames(getClassName())}
    >
      {props.children}
    </button>
  );
};

export default Button;
