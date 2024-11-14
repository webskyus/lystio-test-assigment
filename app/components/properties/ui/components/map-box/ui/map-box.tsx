'use client';

import React, {useEffect, useRef} from 'react';
import mapboxgl from "mapbox-gl"
import {Icon} from "@iconify/react";

mapboxgl.accessToken = `pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ`;

const MapBox = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [16, 48],
            zoom: 14,
            pitch: 60,
        })
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
        })
    }, [])

    return (
        <section className={`
            relative
            flex justify-center items-center 
            w-full h-[700px] min-h-[calc(100vh-152px)] 
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
        </section>
    );
};

export {
    MapBox
};
