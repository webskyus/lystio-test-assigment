import React from 'react';
import sliderImg1 from '@/app/assets/images/s1.jpg';
import sliderImg2 from '@/app/assets/images/s2.jpg';
import sliderImg3 from '@/app/assets/images/s3.jpg';
import sliderImg4 from '@/app/assets/images/s4.jpg';
import {PropertyCard} from "@/app/components/properties/ui/components/property-card";

export type PropertyListType = {
    id: number,
    images: string[],
    title: string,
    isNew: boolean,
    is3dTour: boolean,
    isVerified: boolean,
    area: string,
    address: string,
    bedrooms: string,
    bathrooms: string,
    priceRange: string,
    availableFrom: string,
    date: number,
}

const PropertiesList = () => {
    const listings: PropertyListType[] = [
        {
            "id": 0,
            "images": [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            "title": "Elegant 5-room apartment with spacious rooms",
            "address": "Reichsratstraße 13, 1010 Vienna",
            "area": "1,300 - 1,500 m²",
            "bedrooms": "4 - 8 bed",
            "bathrooms": "2 - 4 bath",
            "priceRange": "2,000 € - 5,000 €",
            "availableFrom": "Immediately",
            "isNew": true,
            "is3dTour": true,
            "isVerified": true,
            "date": 1730400628709
        },
        {
            "id": 1,
            "images": [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            "title": "Modern loft with panoramic city views",
            "address": "Mariahilfer Straße 88, 1060 Vienna",
            "area": "900 - 1,200 m²",
            "bedrooms": "3 - 5 bed",
            "bathrooms": "1 - 3 bath",
            "priceRange": "1,800 € - 4,500 €",
            "availableFrom": "December 2024",
            "isNew": true,
            "is3dTour": false,
            "isVerified": true,
            "date": 1730430628709
        },
        {
            "id": 2,
            "images": [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            "title": "Cozy family home near city park",
            "address": "Praterstraße 55, 1020 Vienna",
            "area": "1,100 - 1,300 m²",
            "bedrooms": "4 - 6 bed",
            "bathrooms": "2 - 3 bath",
            "priceRange": "2,200 € - 4,800 €",
            "availableFrom": "January 2025",
            "isNew": false,
            "is3dTour": true,
            "isVerified": true,
            "date": 1730300628709
        },
        {
            "id": 3,
            "images": [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            "title": "Luxurious penthouse with private terrace",
            "address": "Opernring 2, 1010 Vienna",
            "area": "1,500 - 1,700 m²",
            "bedrooms": "5 - 7 bed",
            "bathrooms": "3 - 5 bath",
            "priceRange": "3,500 € - 7,000 €",
            "availableFrom": "March 2025",
            "isNew": true,
            "is3dTour": false,
            "isVerified": true,
            "date": 1730100628709
        },
        {
            "id": 4,
            "images": [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            "title": "Charming studio in the heart of Vienna",
            "address": "Kärntner Straße 1, 1010 Vienna",
            "area": "600 - 800 m²",
            "bedrooms": "1 - 2 bed",
            "bathrooms": "1 - 2 bath",
            "priceRange": "1,200 € - 2,800 €",
            "availableFrom": "February 2025",
            "isNew": true,
            "is3dTour": true,
            "isVerified": true,
            "date": 1730100628709
        }
    ]

    return (
        <section className="container mx-auto max-h-[calc(100vh-152px)] scrollbar-hide p-4 overflow-auto">
            <h2 className="text-2xl font-semibold mb-4">Listing around me</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    listings.map((data) => {
                        return <PropertyCard key={data.id} data={data}/>
                    })
                }
            </section>
        </section>
    );
};

export {PropertiesList};
