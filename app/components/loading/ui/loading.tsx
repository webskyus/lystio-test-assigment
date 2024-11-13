import React, {FC} from 'react';
import {Icon} from "@iconify/react";

interface Props {
    isLoading: boolean;
}

const Loading: FC<Props> = ({isLoading}) => {

    if (!isLoading) return;

    return <div className={'flex items-center justify-center mb-[20px]'}>
        <Icon icon="eos-icons:loading" width={50} height={50} color={"var(--primary)"} />
    </div>
};

export {Loading};
