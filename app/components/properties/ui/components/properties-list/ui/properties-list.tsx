'use client';

import React, {FC, useMemo, useState} from 'react';
import {PropertyCard} from "@/app/components/properties/ui/components/property-card";
import ListingIcon from "@/app/components/icons/listing-icon";
import {Icon} from "@iconify/react";
import {PropertyModel, useSearch} from "@/app/context";
import {Loading} from "@/app/components/loading";
import {EmptySearch} from "@/app/components/empty-search";

interface Props {
    properties: PropertyModel[];
}

const PropertiesList: FC<Props> = ({properties}) => {
    const [propertyList, setPropertyList] = useState<PropertyModel[]>(properties);
    const {state} = useSearch();

    useMemo(() => {
        if (state.properties) {
            setPropertyList(state.properties);
        }
    }, [state.properties])

    return (
        <section className={`
                relative 
                container mx-auto max-h-[calc(100vh-152px)] 
                p-[24px]
                pt-0
                scrollbar-hide 
                overflow-auto bg-white
        `}>
            <header className={`
                sticky top-0 z-20 
                flex items-baseline justify-between 
                mb-[37px] pt-[16px] 
                bg-white
            `}>
                <h2 className="flex items-baseline mb-[7px] text-[26px]">
                    <ListingIcon/>

                    <p className={'flex flex-col ml-[10px] translate-y-[-4px]'}>
                        <span>Listing around me</span>
                        <span className={'text-[12px] opacity-60'}>
                            {propertyList?.length} properties
                        </span>
                    </p>
                </h2>

                <nav className={'flex items-center'}>
                    <ul className={'flex items-center mr-[22px] p-[4px] bg-background'}>
                        <li className={'mr-[8px]'}>
                            <button className={`
                                flex items-center justify-center 
                                min-w-[40px] min-h-[30px] 
                                rounder-[4px] 
                                shadow-lg 
                                bg-white
                                transition 
                                hover:opacity-80
                            `}>
                                <Icon icon="bi:grid-3x3-gap" width={20} height={20}/>
                            </button>
                        </li>
                        <li className={'mr-[8px]'}>
                            <button className={`
                                flex items-center justify-center 
                                min-w-[40px] min-h-[30px] 
                                rounder-[4px] 
                                transition 
                                hover:bg-white
                            `}>
                                <Icon icon="ic:baseline-list" width={20} height={20}/>
                            </button>
                        </li>
                        <li>
                            <button className={`
                                flex items-center justify-center 
                                min-w-[40px] min-h-[30px] 
                                rounder-[4px] 
                                transition 
                                hover:bg-white
                            `}>
                                <Icon icon="flowbite:grid-outline" width={20} height={20}/>
                            </button>
                        </li>
                    </ul>

                    <ul>
                       <button className={`
                            flex items-center 
                            px-[10px] py-[7px]
                            text-[12px]  
                            rounded-[4px] 
                            hover:bg-background transition
                       `}>
                           Sort by Relevance
                           <Icon icon="basil:sort-solid" width={24} height={24} className={'ml-[8px]'} />
                       </button>
                    </ul>
                </nav>
            </header>

            <Loading isLoading={state.loading}/>
            <EmptySearch state={propertyList && !state.loading && !propertyList.length}/>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    !state.loading && propertyList && propertyList.length
                        ? propertyList?.map((data: PropertyModel) => {
                            return <PropertyCard key={data.id} data={data}/>
                        })
                        : ''
                }
            </section>
        </section>
    );
};

export {PropertiesList};
