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
}

// TODO: добавить отображение обязательных полей

const Input: FC<IInputProps> = ({onChange, placeholder = '', name,
                                    className = '', value, required = false,
                                    isPassword, isSearch
                                }) => {
    return (
      <div className={styles.inputGroup}>
        <input
          className={`${styles.input} ${className} ${isSearch && styles.searchInput}`}
          type={isPassword ? 'password' : 'text'}
          placeholder={placeholder}
          name={name}
          id={name}
          required={required}
          onChange={onChange}
        />
          {isSearch && <Image src={search} alt={'search'} className={styles.searchIcon}></Image>}
      </div>


    )
}

export default Input;

