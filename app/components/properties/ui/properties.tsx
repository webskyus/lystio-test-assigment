'use client';

import React, {FC} from 'react';
import {PropertiesList} from "@/app/components/properties/ui/components/properties-list";
import {PropertiesFilters} from "@/app/components/properties/ui/components/properties-filters";
import {PropertyModel} from "@/app/context";
import dynamic from "next/dynamic";
import {Loading} from "@/app/components/loading";

const MapBox = dynamic(() => import("@/app/components/properties/ui/components/map-box/ui/map-box"), {
    ssr: false,
    loading: () => <Loading isLoading={true} />,
})

interface Props {
    properties: PropertyModel[]
}

const Properties: FC<Props> = ({properties}) => {
    return (
        <main className={'container'}>
            <PropertiesFilters/>

            <section className={'grid grid-cols-2 gap-[3px] h-[700px] min-h-[calc(100vh-152px)] '}>
                <MapBox/>
                <PropertiesList properties={properties}/>
            </section>
        </main>
    );
};

export {
    Properties
};
