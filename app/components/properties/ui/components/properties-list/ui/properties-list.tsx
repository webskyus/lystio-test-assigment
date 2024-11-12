import React from 'react';
import sliderImg1 from '@/app/assets/images/s1.jpg';
import sliderImg2 from '@/app/assets/images/s2.jpg';
import sliderImg3 from '@/app/assets/images/s3.jpg';
import sliderImg4 from '@/app/assets/images/s4.jpg';
import {PropertyCard} from "@/app/components/properties/ui/components/property-card";

const PropertiesList = () => {
    const listings = [
        {
            id: 0,
            images: [sliderImg1.src, sliderImg2.src, sliderImg3.src, sliderImg4.src],
            title: 'Elegant 5-room apartment with spacious rooms',
            address: 'Reichsratstraße 13, 1010 Vienna',
            area: '1,300 - 1,300 m²',
            bedrooms: '4 - 8 bed',
            bathrooms: '2 - 4 bath',
            priceRange: '2,000 € - 5,000 €',
            availableFrom: 'Immediately',
            isNew: true,
            is3dTour: true,
            isVerified: true,
            date: 1730400628709
        }
    ];

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
