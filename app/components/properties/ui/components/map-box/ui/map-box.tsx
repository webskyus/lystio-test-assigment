'use client';

import React, {useEffect, useRef} from 'react';
import mapboxgl from "mapbox-gl"

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
            flex justify-center items-center 
            w-full h-[700px] min-h-[calc(100vh-152px)] 
            overflow-hidden
        `}>
            <div
                id="map"
                ref={mapContainer}
                style={{width: "100%", height: "100vh"}}
            />
        </section>
    );
};

export {MapBox};
