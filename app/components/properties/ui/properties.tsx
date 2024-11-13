import React, {FC} from 'react';
import {PropertiesList} from "@/app/components/properties/ui/components/properties-list";
import {MapBox} from "@/app/components/properties/ui/components/map-box";
import {PropertiesFilters} from "@/app/components/properties/ui/components/properties-filters";
import {PropertyModel} from "@/app/context";

interface Props {
    properties: PropertyModel[]
}

const Properties: FC<Props> = ({properties}) => {
    return (
        <main className={'container'}>
            <PropertiesFilters/>

            <section className={'grid grid-cols-2 gap-[3px]'}>
                <MapBox/>
                <PropertiesList properties={properties}/>
            </section>
        </main>
    );
};

export {
    Properties
};
