"use client";

import Modal from "@/app/components/Modal";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FiAlertTriangle } from 'react-icons/fi'
import { Dialog } from '@headlessui/react'
import Button from "@/app/components/Button";

interface ConfirmModalProps {
    isOpen?: boolean;
    onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  console.log(conversationId , 'from confirmModal');
  const [isLoading , setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios.delete(`/api/conversations/${conversationId}`)
    .then(() => {
        onClose();
        router.push('/conversations');
        router.refresh();
    })
    .catch(() => toast.error('Something Went Wrong!'))
    .finally(() => setIsLoading(false))
  }, [conversationId , router , onClose]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="sm:flex sm:items-start">
            <div className="flex mt-3 mx-auto h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:w-10 sm:h-10">
                <FiAlertTriangle className="h-6 w-6 text-red-600"/>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-300">
                    Delete conversation
                </Dialog.Title>
                <div className="mt-2 text-gray-400">
                    <p className=" text-sm">Are you Aure you want to delete this conversation ? this action can't be undone</p>
                </div>
            </div>
        </div> 
        <div className="px-3 mt-5 sm:mt-4 flex justify-between">
            <Button disabled={isLoading} secondary onClick={onClose}>Cancle</Button>
            <Button disabled={isLoading} danger onClick={onDelete}>Delete</Button>
        </div>
    </Modal>
  )
}

export default ConfirmModal
