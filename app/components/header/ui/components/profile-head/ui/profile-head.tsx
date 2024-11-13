import React from 'react';
import Image from "next/image";
import {Icon} from "@iconify/react";

const ProfileHead = () => {
    return (
        <button className={'flex items-center group'}>
            <Image src={'https://i.imgur.com/DMh83Uy.jpeg'} width={32} height={32} alt={'Profile Avatar'}/>
            <Icon icon="iconoir:nav-arrow-down" width={18} height={18} className={'ml-[5px] group-hover:translate-y-0.5 transition'} />
        </button>
    );
};

export {
    ProfileHead
};
