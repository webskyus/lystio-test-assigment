import React, {FC} from 'react';
import VerifiedIcon from "@/app/components/icons/verified-icon";
import {Icon} from "@iconify/react";

interface Props {
    isVerified: boolean;
}

const IsVerifiedLabel: FC<Props> = ({isVerified}) => {

    if (!isVerified) {
        return <span className={'flex items-center text-primary-dark'}>
            <Icon icon="octicon:unverified-16" width={16} height={16} className={'opacity-60'} />
            <span className={'ml-[8px] opacity-60'}>Unverified</span>
        </span>
    }

    return (
        <span className={'flex items-center text-primary-darken'}>
            <VerifiedIcon/>
            <span className={'ml-[8px] opacity-60'}>Verified</span>
        </span>
    );
};

export {IsVerifiedLabel};
