"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
  return (
    <div className=" relative w-full">
      <input type={type} autoComplete={id} id={id} { ...register(id , { required })} placeholder={placeholder}
       className=" bg-gray-700 font-light py-3 px-3 w-full rounded-full focus:outline-none"
      />
    </div>
  )
}

export default MessageInput;
