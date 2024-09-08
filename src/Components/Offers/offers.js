import React, { useEffect, useRef } from 'react';
import '../Offers/offers.css';
import Carrot from '../../Assets/Images/carrot-svg.svg';
import DogFood from '../../Assets/Images/dogfood-svg.svg';
import Fitness from '../../Assets/Images/fitness-svg.svg';
import Fortune from '../../Assets/Images/fortune-svg.svg';
import Malt from '../../Assets/Images/malt-svg.svg';
import Milk from '../../Assets/Images/milk-svg.svg';
import Olive from '../../Assets/Images/olive-svg.svg';
import Onion from '../../Assets/Images/onion-svg.svg';
import { FaPlus } from 'react-icons/fa';

const offers = [
  { id: 1, image: Carrot, oldPrice: 'Rs. 1500', newPrice: 'Rs. 1200', name: 'Product 1', price: 1200 },
  { id: 2, image: DogFood, oldPrice: 'Rs. 2000', newPrice: 'Rs. 1800', name: 'Product 2', price: 1800 },
  { id: 3, image: Fitness, oldPrice: 'Rs. 1000', newPrice: 'Rs. 900', name: 'Product 3', price: 900 },
  { id: 4, image: Fortune, oldPrice: 'Rs. 800', newPrice: 'Rs. 700', name: 'Product 4', price: 700 },
  { id: 5, image: Malt, oldPrice: 'Rs. 1800', newPrice: 'Rs. 1500', name: 'Product 5', price: 1500 },
  { id: 6, image: Milk, oldPrice: 'Rs. 2200', newPrice: 'Rs. 2000', name: 'Product 6', price: 2000 },
  { id: 7, image: Olive, oldPrice: 'Rs. 1400', newPrice: 'Rs. 1200', name: 'Product 7', price: 1200 },
  { id: 8, image: Onion, oldPrice: 'Rs. 1900', newPrice: 'Rs. 1700', name: 'Product 8', price: 1700 },
];

const Offers = ({ onAddToCart }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let interval;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    interval = setInterval(scroll, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offers-container">
      <h2>Offers</h2>
      <div className="offers-scroll-container" ref={scrollContainerRef}>
        {offers.concat(offers).map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.name} />
            <h4>{offer.name}</h4>
            <p className="old-price">{offer.oldPrice}</p>
            <p className="new-price">{offer.newPrice}</p>
            <button className="add-btn" onClick={() => onAddToCart(offer)}><FaPlus /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
