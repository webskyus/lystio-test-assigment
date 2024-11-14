'use client';

import {useMemo, useState} from 'react';
import {API_TENEMENT_MAP_SEARCH} from "@/app/utils/api-config";
import {useSearch} from "@/app/context";
import {OPTIONS} from "@/app/utils/api-config";

export interface PropertyOnMapModel {
    count: number;
    ids: number[];
    pt: [number, number]; // [longitude, latitude]
    sizeRange: [number, number];
    rentRange: [number, number];
    address?: string
}

const useFetchPropertiesOnMap = (zoom: number) => {
    const {state} = useSearch();
    const [propertiesOnMapList, setPropertiesOnMapList] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await fetch(API_TENEMENT_MAP_SEARCH, {
                ...OPTIONS,
                body: JSON.stringify({
                    ...state.filters,
                    zoom: zoom
                }),
            });
            const list = await res.json();

            setPropertiesOnMapList(list);
        } catch (e) {
            console.log('Fetch properties on map error', e);
        }
    }

    useMemo(() => {
        handleFetch()
    }, [zoom, state.filters])

    return {
        propertiesOnMapList: propertiesOnMapList
    }
};

export default useFetchPropertiesOnMap;
