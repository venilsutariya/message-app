"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
    icon: Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return (
        <Link href={href} onClick={handleClick} className={clsx(' text-gray-400 group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 hover:text-white hover:bg-gray-700' , active && 'bg-gray-800 text-white')}>
            <Icon className='h-6 w-6'/>
        </Link>
    )
}

export default MobileItem;