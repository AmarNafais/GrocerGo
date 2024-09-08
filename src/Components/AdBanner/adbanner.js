import React, { useState, useEffect } from 'react';
import '../AdBanner/adbanner.css';
import AdOne from '../../Assets/Images/ad-one-img.jpg';
import AdTwo from '../../Assets/Images/ad-two-img.jpg';
import AdThree from '../../Assets/Images/ad-three-img.jpg';

const ads = [
    { image: [AdOne], alt: 'Ad 1' },
    { image: [AdTwo], alt: 'Ad 2' },
    { image: [AdThree], alt: 'Ad 3' },
];

const AdvertisementBanner = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdIndex((prevIndex) =>
                prevIndex === ads.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="advertisement-banner">
            <img
                src={ads[currentAdIndex].image}
                alt={ads[currentAdIndex].alt}
                className="ad-image"
            />
        </div>
    );
};

export default AdvertisementBanner;