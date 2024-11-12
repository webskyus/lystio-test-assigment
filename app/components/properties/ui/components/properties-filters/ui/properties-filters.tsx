import React from 'react';
import {Icon} from "@iconify/react";

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
    return (
        <section className={'mb-[5px] px-[16px] py-[17.5px] bg-white'}>
            <nav>
                <ul className={'flex items-center'}>
                    {
                        filters.map((filter) => {
                            return <li key={filter.id}>
                                <button className={`
                                    flex items-center mr-[16px] 
                                    cursor-pointer 
                                    hover:text-primary transition
                            `}>
                                    {filter.name}

                                    {
                                        filter.name === 'Price' &&
                                        <span className={'text-black opacity-[0.6]'}>
                                            : €300 - €500
                                        </span>
                                    }

                                    {
                                        filter.name === 'All'
                                            ? <Icon icon="lets-icons:filter-big" strokeWidth={1.5} color={'text-dark-primary'} width={22} height={22} className={'ml-[10px]'} />
                                            : <Icon icon="iconoir:nav-arrow-down" width={18} height={18} className={'ml-[10px]'} />
                                    }
                                </button>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </section>
    );
};

export {PropertiesFilters};
