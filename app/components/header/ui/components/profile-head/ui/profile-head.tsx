import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";
import Avatar from '@/app/assets/images/profile.jpg';

const ProfileHead = () => {
    return (
        <button className={'flex items-center group'}>
            <Image src={Avatar.src} width={32} height={32} alt={'Profile Avatar'}/>
            <Icon icon="iconoir:nav-arrow-down" className={'ml-[5px] group-hover:translate-y-0.5 transition'} />
        </button>
    );
};

export {
    ProfileHead
};
