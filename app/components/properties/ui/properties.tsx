import React from 'react';
import {PropertiesList} from "@/app/components/properties/ui/components/properties-list";
import {MapBox} from "@/app/components/properties/ui/components/map-box";
import {PropertiesFilters} from "@/app/components/properties/ui/components/properties-filters";

const Properties = () => {
    return (
        <main className={'container'}>
            <PropertiesFilters/>

            <section className={'grid grid-cols-2'}>
                <MapBox/>
                <PropertiesList/>
            </section>
        </main>
    );
};

export {
    Properties
};
