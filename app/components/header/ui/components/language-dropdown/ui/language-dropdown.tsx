import React from 'react';
import {Icon} from "@iconify/react";

const LanguageDropdown = () => {
    return (
        <button className={`
                flex items-center justify-center 
                w-[32px] h-[32px] 
                rounded-full border border-black-light 
                group
                hover:bg-black-light transition
        `}>
            <Icon icon="tabler:world" width={24} height={24} />
        </button>
    );
};

export {LanguageDropdown};
