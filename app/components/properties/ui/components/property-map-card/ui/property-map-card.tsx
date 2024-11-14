import React, {FC} from 'react';
import {PropertyOnMapModel} from "@/app/hooks/useFetchMapProperties";
import {Icon} from "@iconify/react";
import Image from "next/image";

interface Props {
    data: PropertyOnMapModel
}

const PropertyMapCard: FC<Props> = ({data}) => {
    return (
        <article
            className={`
                overflow-hidden
                bg-white rounded-[12px]
                transition
                hover:bg-white hover:shadow-lg
            `}
        >

            <div className={'relative min-h-[198px] mx-[10px] mt-[10px] rounded-[8px] overflow-hidden'}>
                <Image
                    src={'https://i.imgur.com/pAVrpPN.jpeg'}
                    fill={true}
                    objectFit={'cover'}
                    alt={'Property photo, slide'}
                />
            </div>

            <div className={'p-[8px] pt-[16px]'}>
                <p className={'mb-[18px] font-allianceSemiBold text-[18px]'}>
                    {
                        data.rentRange[0] === data.rentRange[1]
                            ? `${data.rentRange[0]} €`
                            : `${data.rentRange[0]} - ${data.rentRange[1]} €`
                    }
                </p>

                <p className={'mb-[16px] line-clamp-1 font-allianceSemiBold opacity-60'}>
                    {data.address}
                </p>

                <div className={`
                    flex items-center justify-between 
                    min-h-[20px]
                    text-[12px] 
                    mb-[15px]
                `}>
                    <span className={'flex items-center'}>
                        <span className={'inline-block min-w-[18px] mr-[8px]'}>
                             <Icon icon="tabler:cube" width={18} height={18}/>
                        </span>
                        {
                            `${data.sizeRange[0]} - ${data.sizeRange[1]} m²`
                        }
                    </span>

                    <span className={'flex items-center'}>
                         <span className={'inline-block min-w-[18px] mr-[8px]'}>
                            <Icon icon="material-symbols:bed-outline" width={20} height={20}/>
                         </span>
                        4 bed
                    </span>

                    <span className={'flex items-center'}>
                         <span className={'inline-block min-w-[18px] mr-[8px]'}>
                            <Icon icon="solar:bath-linear" width={18} height={18}/>
                         </span>
                        2 bath
                    </span>
                </div>

            </div>
        </article>
    );
};

export {PropertyMapCard};
