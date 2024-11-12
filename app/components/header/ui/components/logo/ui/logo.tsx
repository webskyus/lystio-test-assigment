import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href={'./'}>
            <Image src={'./logo.svg'} width={80} height={38} alt={'Company logo'}/>
        </Link>
    );
};

export {Logo};
