import styles from './Input.module.scss'
import {ChangeEvent, FC} from "react";
import Image from "next/image";
import search from '@/assets/search.svg'

export interface IInputProps {
    name: string,
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string,
    value?: string,
    required?: boolean,
    isPassword?: boolean,
    isSearch?: boolean
    isDisabled?: boolean
    type?: string
}

// TODO: добавить отображение обязательных полей

const Input: FC<IInputProps> = ({onChange, placeholder = '', name,
                                    className = '', value, required = false,
                                    isPassword, isSearch, isDisabled = false, type = 'text'
                                }) => {
    return (
      <div className={styles.inputGroup}>
        <input
          className={`${styles.input} ${className} ${isDisabled && styles.disabled} ${isSearch && styles.searchInput}`}
          type={isPassword ? 'password' : type}
          placeholder={placeholder}
          name={name}
          id={name}
          disabled={isDisabled}
          required={required}
          onChange={onChange}
        />
          {isSearch && <Image src={search} alt={'search'} className={styles.searchIcon}></Image>}
      </div>


    )
}

export default Input;

