'use client';

import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import Slider from "rc-slider";
import './slider.css';


enum FILTER_ID {
    PRICE = 7,
    ALL = 8
}

const filters = [
    {
        id: 0,
        name: 'Rent'
    },
    {
        id: 1,
        name: 'Apartment'
    },
    {
        id: 2,
        name: 'Property type'
    },
    {
        id: 3,
        name: 'Beds/baths'
    },
    {
        id: 4,
        name: 'Living rooms'
    },
    {
        id: 5,
        name: 'Pets'
    },
    {
        id: 6,
        name: 'Deposit'
    },
    {
        id: 7,
        name: 'Price'
    },
    {
        id: 8,
        name: 'All'
    }
]

const PropertiesFilters = () => {
    const [defaultValue, setDefaultValue] = useState([300, 500]);
    const [showPriceRange, setShowPriceRange] = useState(false);

    const handleShowPriceSlider = (id: number) => {
        id === FILTER_ID.PRICE && setShowPriceRange(!showPriceRange)
    }

    const handleChange = (value: number[] | number) => {
        Array.isArray(value) && setDefaultValue(value);
    };

    return (
        <section className={'mb-[5px] px-[16px] py-[17.5px] bg-white'}>
            <nav className={'relative'}>
                <ul className={'flex items-center'}>
                    {
                        filters.map((filter) => {
                            return <li key={filter.id} className={'min-w-[70px]'}>
                                <button onClick={() => handleShowPriceSlider(filter.id)}
                                        className={`
                                                flex items-center mr-[16px] 
                                                cursor-pointer 
                                                hover:text-primary transition
                                                ${showPriceRange && filter.id === FILTER_ID.PRICE ? 'text-primary' : ''}
                                        `}>
                                    {filter.name}

                                    {
                                        filter.id === FILTER_ID.PRICE &&
                                        <span className={'text-black opacity-[0.6]'}>
                                            : €{defaultValue[0]} - €{defaultValue[1]}
                                        </span>
                                    }

                                    {
                                        filter.id === FILTER_ID.ALL
                                            ? <Icon icon="lets-icons:filter-big"
                                                    strokeWidth={1.5}
                                                    color={'text-dark-primary'}
                                                    width={22} height={22}
                                                    className={'ml-[10px]'}
                                            />
                                            : <Icon icon="iconoir:nav-arrow-down"
                                                    width={18} height={18}
                                                    className={'ml-[10px]'}
                                            />
                                    }
                                </button>
                            </li>
                        })
                    }
                </ul>

                {
                    showPriceRange &&
                    <div className={`
                        absolute left-[-17.5px] top-[calc(100%+20px)] z-20 
                        flex items-center 
                        w-[calc(100%+34.5px)] h-[50px] 
                        px-[16px] py-[17.5px]
                        bg-white
                    `}>
                        <Slider min={0}
                                max={10000}
                                range={{draggableTrack: true}}
                                defaultValue={defaultValue}
                                onChange={handleChange}
                                allowCross={false}
                                styles={{
                                    tracks: {
                                        background: `var(--primary)`,
                                    },
                                    track: {
                                        background: 'transparent',
                                    },
                                    handle: {
                                        borderColor: 'var(--primary)',
                                        background: 'var(--primary)',
                                        opacity: 1
                                    },
                                }}
                        />
                    </div>
                }
            </nav>
        </section>
    );
};

export {PropertiesFilters};
