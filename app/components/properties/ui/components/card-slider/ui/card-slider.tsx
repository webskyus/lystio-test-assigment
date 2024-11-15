import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import {EffectCreative, Pagination} from "swiper/modules";
import {MediaModel} from "@/app/context";

interface Props {
    slides: MediaModel[]
}

const CardSlider: FC<Props> = ({slides}) => {
    return (
        <section className={'rounded-[8px] overflow-hidden'}>
            <Swiper slidesPerView={1}
                    pagination={{
                        clickable: true
                    }}
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    modules={[Pagination, EffectCreative]}
                    className={'mySwiper3 min-h-[280px]'}>
                {
                    !slides?.length && <SwiperSlide>
                        <div className={'min-h-[280px]'}>
                            <Image
                                src={'https://i.imgur.com/pAVrpPN.jpeg'}
                                fill={true}
                                objectFit={'cover'}
                                alt={'Property photo, slide'}
                                className="w-full h-[280px]"
                            />
                        </div>
                    </SwiperSlide>
                }

                {
                    slides?.map((slide, i) => {
                        return <SwiperSlide key={i}>
                            <div className={'min-h-[280px]'}>
                                <Image
                                    src={slide.cdnUrl}
                                    fill={true}
                                    blurDataURL={slide.bluredDataURL}
                                    alt={'Property photo, slide'}
                                    className="w-full h-[280px]"
                                />
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
};

export {CardSlider};
