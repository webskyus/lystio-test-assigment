import React, {FC} from 'react';

interface Props {
    name: string
}

const StatusLabel: FC<Props> = ({name}) => {
    return (
        <span className={'px-[9px] py-[4px] mr-[9px] text-[12px] bg-white rounded-full'}>
            {name}
        </span>
    );
};

export {StatusLabel};
