'use client';

import React, {useEffect, useRef, useState} from 'react';
import mapboxgl, {Marker} from "mapbox-gl"
import {Icon} from "@iconify/react";
import useFetchPropertiesOnMap, {PropertyOnMapModel} from "@/app/hooks/useFetchMapProperties";
import debounce from 'lodash.debounce';
import {PropertyMapCard} from "@/app/components/properties/ui/components/property-map-card";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN  as string;

const MapBox = () => {
    const [zoom, setZoom] = useState(11);
    const [selectedMarker, setSelectedMarker] = useState<PropertyOnMapModel | null>(null);
    const [mapInstance, setMapInstance] = useState<mapboxgl.Map | null>(null);
    const mapContainer = useRef(null);
    const {propertiesOnMapList} = useFetchPropertiesOnMap(zoom);

    useEffect(() => {
        if (!mapInstance || !propertiesOnMapList) return;
        const markers: Marker[] = [];

        propertiesOnMapList.map((propertyOnMap: PropertyOnMapModel) => {
            const markerElement = document.createElement('div');
            markerElement.innerHTML = `
               <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                   <div style="display: flex; justify-content: center; align-items: center; ;min-width: 45px; min-height: 45px; background-color: white; border-radius: 50%;">
                        <strong>
                            ${propertyOnMap.count > 1 ? propertyOnMap.count : propertyOnMap.rentRange[0] + ' €'}
                        </strong>
                    </div>
                    <div style="width: 2px; height: 10px; background: white; border-radius: 10px;"></div>
                </div>
            `;
            const marker = new mapboxgl.Marker({ element: markerElement })
                .setLngLat(propertyOnMap.pt)
                .addTo(mapInstance);

            markers.push(marker);

            marker.getElement().addEventListener('click', async () => {
                const [longitude, latitude] = propertyOnMap.pt;
                const reverseGeocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`;

                try {
                    const response = await fetch(reverseGeocodeUrl);
                    const data = await response.json();
                    const placeName = data.features?.[0]?.place_name;

                    setSelectedMarker({
                        ...propertyOnMap,
                        address: placeName,
                    });

                } catch (error) {
                    console.error("Error fetching geocoding data:", error);
                    setSelectedMarker(propertyOnMap);
                }

            });
        });

        return () => {
            markers.map(marker => marker.remove());
        };
    }, [propertiesOnMapList, mapInstance]);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [16.37, 48.1956],
            pitch: 60,
            zoom,
        });
        const navigationControl = new mapboxgl.NavigationControl();
        navigationControl._container.style.position = 'absolute';
        navigationControl._container.style.top = '95px';
        navigationControl._container.style.right = '22px';
        setMapInstance(map);

        map.on("load", () => {
            map.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.mapbox-terrain-dem-v1",
                tileSize: 512,
                maxZoom: 16,
            })
            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 })
            map.addLayer({
                id: "sky",
                type: "sky",
                paint: {
                    "sky-type": "atmosphere",
                    "sky-atmosphere-sun": [0.0, 90.0],
                    "sky-atmosphere-sun-intensity": 15,
                },
            })
            map.on('zoom', debounce(() => {
                setZoom(map.getZoom());
            }, 500))
            map.addControl(navigationControl)
            map.on('click', () => {
                setSelectedMarker(null);
            });
        })


        return () => map.remove();
    }, [])


    return (
        <section className={`
            relative
            flex justify-center items-center 
            w-full
            overflow-hidden
        `}>
            <nav>
                <ul className={'absolute z-10 left-[29px] top-[29px] flex flex-col'}>
                    <li className={'mb-[16px]'}>
                        <button className={`
                            flex justify-center items-center 
                            min-h-[44px] 
                            px-[14px]
                            bg-white rounded-[4px]
                            border-[2px]
                            shadow-2xl
                        `}>
                            <Icon icon="typcn:point-of-interest" width={26} height={26} className={'mr-[7px]'}/>
                            Point of interest
                        </button>
                    </li>

                    <li className={'mb-[16px]'}>
                        <button className={`
                            relative
                            flex justify-center items-center 
                            min-h-[44px] 
                            min-w-[44px]
                            bg-white rounded-full
                            border-[2px]
                            shadow-2xl
                            group
                        `}>
                            <Icon icon="gala:layer" width={26} height={26}/>
                            <span className={`
                                absolute top-[-2px] left-0 
                                z-[-10]
                                flex justify-center items-center
                                pl-[53px] pr-[14px]
                                w-[calc(100%+80px)] 
                                h-[calc(100%+5px)]
                                rounded-[22px]
                                bg-black text-white
                                transition
                                opacity-0 
                                group-hover:opacity-100
                            `}>
                                Layers
                            </span>
                        </button>
                    </li>

                    <li className={'mb-[16px]'}>
                        <button className={`
                            relative
                            flex justify-center items-center 
                            min-h-[44px] 
                            min-w-[44px]
                            bg-white rounded-full
                            border-[2px]
                            shadow-2xl
                            group
                        `}>
                            <Icon icon="ri:pencil-line" width={26} height={26}/>
                            <span className={`
                                absolute top-[-2px] left-0 
                                z-[-10]
                                flex justify-center items-center
                                pl-[53px] pr-[14px]
                                w-[calc(100%+80px)] 
                                h-[calc(100%+5px)]
                                rounded-[22px]
                                bg-black text-white
                                transition
                                opacity-0 
                                group-hover:opacity-100
                            `}>
                                Draw
                            </span>
                        </button>
                    </li>
                </ul>

                <ul className={'absolute z-10 left-[29px] bottom-[40px] flex items-center'}>
                    <li>
                        <button className={`
                            flex justify-center items-center 
                            min-h-[44px] 
                            px-[14px]
                            mr-[11px]
                            bg-white rounded-[4px]
                            border-[2px]
                            shadow-2xl
                        `}>
                            Streetview
                            <Icon icon="teenyicons:google-streetview-outline" width={26} height={26}
                                  className={'ml-[7px]'}/>
                        </button>
                    </li>
                    <li>
                        <button className={`
                            flex justify-center items-center 
                            min-h-[44px] 
                            px-[14px]
                            mr-[11px]
                            bg-white rounded-[4px]
                            border-[2px]
                            shadow-2xl
                        `}>
                            Route planner
                            <Icon icon="solar:route-outline" width={26} height={26}
                                  className={'ml-[7px]'}/>
                        </button>

                    </li>
                </ul>

                <ul className={`
                    absolute z-10 right-[34px] bottom-[40px] 
                    flex flex-col 
                    p-[2px] 
                    rounded-[4px] bg-white shadow-2xl
                `}>
                    <li className={'mb-[4px]'}>
                        <button className={`
                            flex justify-center items-center 
                            min-w-[44px] 
                            min-h-[34px] 
                            bg-white rounded-[4px]
                            transition
                            hover:shadow-xl
                        `}>
                            <Icon icon="mi:add" width={26} height={26}/>
                        </button>
                    </li>
                    <li className={'mb-[2px]'}>
                        <button className={`
                            flex justify-center items-center 
                            min-w-[44px] 
                            min-h-[34px] 
                            transition
                            bg-white rounded-[4px]
                            hover:shadow-xl
                        `}>
                            <Icon icon="ic:round-minus" width={26} height={26} />
                        </button>
                    </li>
                </ul>
            </nav>

            <div
                id="map"
                ref={mapContainer}
                style={{width: "100%", height: "100vh"}}
            />

            {selectedMarker && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '200px',
                        right: '34px',
                        padding: '10px',
                        width: '317px',
                    }}
                >
                    <PropertyMapCard data={selectedMarker}/>
                </div>
            )}
        </section>
    );
};

export default MapBox
