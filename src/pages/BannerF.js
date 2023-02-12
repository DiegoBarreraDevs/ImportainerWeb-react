import React from 'react';
import BannerFinal from '../components/Banner/BannerFinal'
import BannerSlide from '../components/Banner/BannerSlide';

const BannerF = () => {
    return(
        <div>
            <BannerFinal>
                <BannerSlide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2FBanner-1.webp?alt=media&token=c2cfd79d-ceb1-4d29-bb6b-ee930b371f82"/>
                <BannerSlide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2FBanner11.webp?alt=media&token=66cb51ad-d2ae-426c-b6b0-454ffae87c38"/>
                <BannerSlide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Banner%2FBanner2.webp?alt=media&token=183cf5e7-ba54-47b2-a46f-75b40f79f341"/>
            </BannerFinal>
        </div>
    )
}

export default BannerF

