import React from 'react';
import { Icon } from '@iconify/react';

const Search = () => {
    return (
        <form className="flex items-stretch 2xl:min-w-[514px] border border-primary rounded-full pl-[8px] pr-[4px] py-[3px]">
            <input
                type="text"
                placeholder="Search"
                className="flex-grow rounded-full outline-0 placeholder:text-black/[0.6]"
            />

            <div className="flex items-center mx-2 text-black cursor-pointer">
                <Icon icon="mingcute:ai-fill" />
                <span className="mr-1 size">AI Search</span>
                <Icon icon="iconoir:nav-arrow-down" />
            </div>

            <button type={"submit"} className="flex items-center justify-center w-[47px] h-[47px] bg-primary rounded-full text-white hover:bg-fuchsia-800 transition">
                <Icon icon="lets-icons:search-light" strokeWidth={1.5} width={28} height={28} />
            </button>
        </form>
    );
};

export {Search};
