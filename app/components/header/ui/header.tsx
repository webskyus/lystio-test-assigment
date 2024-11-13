import React from 'react';
import {LanguageDropdown} from "@/app/components/header/ui/components/language-dropdown";
import {ProfileHead} from "@/app/components/header/ui/components/profile-head";
import {Logo} from "@/app/components/header/ui/components/logo";
import {Search} from "@/app/components/header/ui/components/search";
import Link from "next/link";

const Header = () => {
    return (
        <header className={'mb-[2px] pt-[18px] pb-[12px] bg-white'}>
            <div className={'container'}>
                <nav className={'flex items-center justify-between'}>
                    <Logo/>
                    <Search/>

                    <ul className={'flex items-center'}>
                        <li className={'mr-[24px]'}>
                            <Link href={'/'} className={'hover:text-primary transition'}>Advertise</Link>
                        </li>

                        <li className={'mr-[24px]'}>
                            <LanguageDropdown/>
                        </li>

                        <li className={'min-w-[55px]'}>
                            <ProfileHead/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export {Header};
