import React, {FC} from 'react';

interface Props {
    state: boolean
}

const EmptySearch: FC<Props> = ({state}) => {
    if (!state) return;

    return <p className={'text-center opacity-60'}>
        No properties found. Please adjust your search filters and try again...
    </p>
};

export {EmptySearch};
