import cls from './Button.module.scss';
import React, {FC} from "react";
import Image from "next/image";
import arrow from '@/assets/download-btn-arrow.svg'

interface IButtonProps {
    children: string,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string
    isSubmit?: boolean
    disabled?: boolean
    isDownload?: boolean
}

const Button: FC<IButtonProps> = ({isSubmit, children, onClick, className, disabled, isDownload}) => {
    return (
      <div className={cls.buttonGroup}>
        {isDownload && <Image src={arrow} alt={'arrow'} className={cls.arrow}/>}
        <button
            className={`${cls.button} ${className} ${isDownload && cls.download}`}
            onClick={onClick}
            type={isSubmit ? 'submit' : 'button'}
            disabled={disabled}
        >
          {children}
        </button>
      </div>
    );
};

export default Button;