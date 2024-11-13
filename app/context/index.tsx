'use client';

import React, {createContext, useContext, useReducer, ReactNode, useMemo} from 'react';
import {API_TENEMENT_SEARCH, DEFAULT_FILTERS} from "@/app/utils/consts";

export interface MediaModel {
    id: number;
    type: string;
    mimeType: string;
    size: number;
    name: string;
    cdnUrl: string;
    sort: number;
    title: string;
    description: string;
    bluredDataURL: string;
    category: number;
}

export interface PropertyModel {
    id: number;
    title: string;
    abstract: string;
    address: string;
    addressDoor: string;
    zip: string;
    city: string;
    country: string;
    rooms: number;
    roomsBed: number;
    roomsBath: number;
    size: number;
    rent: number;
    rentUtilities: number;
    rentFull: number;
    rentDeposit: number;
    rentComission: number;
    amenities: number[];
    amenitiesTexts: Record<string, string>;
    location: string[];
    type: number;
    subType: number;
    condition: number;
    accessibility: number;
    unitType: 'single' | 'multiple';
    rentType: 'rent' | 'sale';
    floorType: number;
    heatingType: number;
    leaseDuration: number;
    availableFrom: string;
    highlight: boolean;
    verified: boolean;
    autoRenewUntil: string;
    lastRenewAt: string;
    media: MediaModel[];
    constructionYear: number;
    modernisationYear: number;
    floor: string;
    tenements: string[];
    sizeRange: number[];
    rentRange: number[];
    roomsRange: number[];
    roomsBathRange: number[];
    roomsBedRange: number[];
}

type FiltersPaylod = {
    filter: {
        rent: number[]
    }
}

type StateType = {
    searchQuery: string;
    filters: FiltersPaylod;
    properties: null | PropertyModel[];
    loading: boolean;
};

enum QUERIES {
    SET_QUERY = 'SET_QUERY',
    SET_FILTERS = 'SET_FILTERS',
    SET_PROPERTIES = 'SET_PROPERTIES',
    SET_LOADING = 'SET_LOADING',
}

type ActionType =
    | { type: QUERIES.SET_QUERY; payload: string }
    | { type: QUERIES.SET_FILTERS; payload: FiltersPaylod }
    | { type: QUERIES.SET_PROPERTIES; payload: PropertyModel[] }
    | { type: QUERIES.SET_LOADING; payload: boolean };

const initialState: StateType = {
    searchQuery: '',
    filters: DEFAULT_FILTERS,
    properties: null,
    loading: false,
};

const searchReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case QUERIES.SET_QUERY:
            return { ...state, searchQuery: action.payload };
        case QUERIES.SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...action.payload } };
        case QUERIES.SET_PROPERTIES:
            return { ...state, properties: action.payload };
        case QUERIES.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

type SearchContextType = {
    state: StateType;
    updateFilters: (newFilters: FiltersPaylod) => void;
    setSearchQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const updateFilters = (newFilters: FiltersPaylod) => {
        dispatch({ type: QUERIES.SET_FILTERS, payload: newFilters });
    };

    const setSearchQuery = (query: string) => {
        dispatch({ type: QUERIES.SET_QUERY, payload: query });
    };

    const fetchProperties = async () => {
        dispatch({ type: QUERIES.SET_LOADING, payload: true });

        try {
            const res = await fetch(API_TENEMENT_SEARCH, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state.filters),
            });
            const list = await res.json();

            dispatch({ type: QUERIES.SET_PROPERTIES, payload: list.res });
        } catch (error) {
            console.error('Something went wrong...', error);
        } finally {
            dispatch({ type: QUERIES.SET_LOADING, payload: false });
        }
    };

    useMemo(() => {
        fetchProperties();
    }, [state.searchQuery, state.filters]);

    return (
        <SearchContext.Provider value={{ state, updateFilters, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('Use useSearch only in SearchProvider');
    }

    return context;
};
