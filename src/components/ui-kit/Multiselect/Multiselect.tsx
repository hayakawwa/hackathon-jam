'use client'

import cls from './Multiselect.module.scss';
import React, {FC, useState} from "react";

export interface IMultiselectProps {
    options: string[],
    placeholder?: string,
    name?: string,
    maxOptionsSelected?: number
}

const Multiselect: FC<IMultiselectProps> = ({options, placeholder, name, maxOptionsSelected}) => {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState<boolean>(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>, option: string) => {
        if (selectedOptions.length >= maxOptionsSelected!) {
            evt.target.checked = false;
        }
        const index = selectedOptions.findIndex(opt => opt === option);
        if (index === -1) {
            if (maxOptionsSelected && selectedOptions.length >= maxOptionsSelected) {
                return;
            }
            setSelectedOptions(prevState => [...prevState, option]);
        } else {
            selectedOptions.splice(index, 1);
            setSelectedOptions([...selectedOptions]);
        }
    }


    return (
        <fieldset className={cls.multiselect}>
            <div className={cls.selectedOptions} onClick={() => setIsDropdownDisplayed((prevState) => !prevState)}>
                {selectedOptions.map(
                    (option, index) => (
                        <span className={cls.option} key={index}>
                            {option}
                        </span>
                    )
                )
                }
            </div>
            {isDropdownDisplayed && <div className={cls.dropdown}>
                {options.map(
                    (option, index) => (
                        <fieldset key={index}>
                            <input
                                id={option}
                                name={option}
                                type={"checkbox"}
                                hidden
                                onChange={(evt) => handleCheckboxChange(evt, option)}
                                checked={selectedOptions.includes(option)}
                            />
                            <label htmlFor={option}>
                                {option}
                            </label>
                        </fieldset>
                    )
                )}
            </div>}
            {maxOptionsSelected && <p className={cls.subText}>{selectedOptions.length} из {maxOptionsSelected}</p>}
        </fieldset>
    )
};

export default Multiselect;