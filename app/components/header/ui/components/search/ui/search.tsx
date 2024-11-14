'use client';

import React, {FormEvent, useState} from 'react';
import { Icon } from '@iconify/react';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmitForm} className={`
            flex items-stretch 2xl:min-w-[514px] 
            pl-[8px] pr-[4px] py-[3px]
            border border-primary
            rounded-full 
        `}>
            <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                className={'flex-grow rounded-full outline-0 placeholder:text-black/[0.6]'}
            />

            <div className={'flex items-center mx-2 text-black cursor-pointer'}>
                <Icon icon="mingcute:ai-fill" />
                <span className={'ml-[8px] mr-[8px]'}>AI Search</span>
                <Icon icon="iconoir:nav-arrow-down" width={18} height={18}/>
            </div>

            <button type={"submit"} className={`
                flex items-center justify-center 
                w-[47px] h-[47px] 
                text-white
                bg-primary rounded-full 
                transition
                hover:bg-fuchsia-800 
            `}>
                <Icon icon="lets-icons:search-light" strokeWidth={1.5} width={28} height={28} />
            </button>
        </form>
    );
};

export {Search};
