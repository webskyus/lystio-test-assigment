'use client';

import React, {FC} from 'react';
import {StatusLabel} from "@/app/components/properties/ui/components/status-label";
import {Icon} from "@iconify/react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import VerifiedIcon from "@/app/components/icons/verified-icon";
import FavoriteIcon from "@/app/components/icons/favorite-icon";
import {CardSlider} from "@/app/components/properties/ui/components/card-slider";
import {PropertyListType} from "@/app/components/properties/ui/components/properties-list/ui/properties-list";


interface Props {
    data: PropertyListType
}

dayjs.extend(relativeTime);

const PropertyCard: FC<Props> = ({data}) => {
    return (
        <article
            className={`
                rounded-lg overflow-hidden transition
                hover:bg-white hover:shadow-lg
            `}
        >
            <div className={'relative'}>
                <CardSlider slides={data.images}/>

                <div className={'absolute left-[10px] top-[10px] z-10'}>
                    <StatusLabel name={data.isNew ? 'New' : ''}/>
                    <StatusLabel name={data.is3dTour ? '3D Tour' : ''}/>
                </div>

                <button className={`
                                absolute top-2 right-2 z-10 
                                flex justify-center items-center
                                min-w-[28px] max-w-[28px] 
                                min-h-[28px] max-h-[28px]
                                bg-white rounded-full 
                                hover:shadow-md hover:opacity-90 
                                transition 
                            `}>
                    <FavoriteIcon/>
                </button>
            </div>

            <div className={'p-[8px] pt-[16px]'}>
                <div className={'flex justify-between items-center mb-[16px]'}>
                    {data.isVerified && (
                        <span className={'flex items-center text-primary-darken'}>
                            <VerifiedIcon/>
                            <span className={'ml-[8px] opacity-60'}>Verified</span>
                        </span>
                    )}

                    <time dateTime={dayjs(data.date).format()} className={'ml-auto opacity-60'}>
                        {dayjs().to(data.date)}
                    </time>
                </div>

                <h3 className={'mb-[16px] font-allianceSemiBold line-clamp-1'}>
                    {data.title}
                </h3>

                <p className={'mb-[16px] font-allianceSemiBold opacity-60'}>
                    {data.address}
                </p>

                <div className={`
                    flex items-center justify-between 
                    mb-[16px] min-h-[20px]
                    text-[12px] 
                    opacity-60
                `}>
                    <span className={'flex items-center'}>
                        <span className={'inline-block min-w-[18px] mr-[8px]'}>
                             <Icon icon="tabler:cube" width={18} height={18}/>
                        </span>
                        {data.area}
                    </span>
                    <span className={'flex items-center'}>
                         <span className={'inline-block min-w-[18px] mr-[8px]'}>
                            <Icon icon="material-symbols:bed-outline" width={20} height={20}/>
                         </span>
                        {data.bedrooms}
                    </span>
                    <span className={'flex items-center'}>
                         <span className={'inline-block min-w-[18px] mr-[8px]'}>
                            <Icon icon="solar:bath-linear" width={18} height={18}/>
                         </span>
                        {data.bathrooms}
                    </span>
                </div>

                <p className={'mb-[18px] font-allianceSemiBold text-[18px]'}>
                    {data.priceRange}
                </p>

                <p className={'text-[12px]'}>
                    <span className={'opacity-60'}>
                        Available From:
                        {' '}
                    </span>
                    <span>
                         {data.availableFrom}
                    </span>
                </p>
            </div>
        </article>
    );
};

export {PropertyCard};
