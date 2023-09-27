"use client";

import clsx from "clsx";
import Link from "next/link";

interface DeskTopItemProps {
    label: string;
    href: string;
    active?: boolean;
    icon: any
    onClick?: () => void;
}

const DesktopItem: React.FC<DeskTopItemProps> = ({
    label,
    href,
    active,
    icon: Icon,
    onClick
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return (
        <li onClick={handleClick}>
            <Link 
            href={href}
            className={clsx('group flex gap-x-3 rounded-md p-3 text-sm  leading-6 font-semibold text-gray-400 hover:text-white hover:bg-gray-700 transition' , active && 'bg-gray-700 text-white')}
            >
                <Icon className='h-6 w-6 shrink-0'/>
                <span className=" sr-only">
                    {label}
                </span>
            </Link>
        </li>
    )
}

export default DesktopItem