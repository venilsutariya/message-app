"use client";

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div className=" text-white">
            <label
             className=" block text-sm font-medium leading-6 text-gray-400"
             htmlFor={id}>
                {label}
            </label>
            <div className="mt-2">
                <input
                id={id}
                type={type} 
                disabled={disabled}
                autoComplete={id}
                {...register(id , { required })}
                className={clsx(`
                 form-input
                 block
                 w-full
                 rounded-md
                 border-0
                 py-1.5
                 text-gray-400
                 shadow-sm
                 ring-inset
                 ring-gray-400
                 placeholder:text-gray-400
                 focus:ring-2
                 focus:ring-inset
                 focus:ring-sky-600
                 sm:text-sm
                 sm:leading-6
                 bg-gray-900
                ` , errors[id] && "focus:ring-rose-500" , disabled && "opacity-50 cursor-not-allowed ")} />
            </div>
        </div>
    )
}

export default Input;