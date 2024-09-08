import React from 'react';
import './categories.css';
import FreshFood from '../../Assets/Images/freshfood-svg.svg';
import Confectionary from '../../Assets/Images/confectionary-svg.svg';
import Crisps from '../../Assets/Images/crisps-svg.svg';
import Drinks from '../../Assets/Images/drinks-svg.svg';
import Household from '../../Assets/Images/household-svg.svg';
import PersonalCare from '../../Assets/Images/personalcare-svg.svg';
import Baby from '../../Assets/Images/baby-svg.svg';
import Pets from '../../Assets/Images/pets-svg.svg';

const categories = [
    { title: "Fresh Food", link: "/freshfood", image:[FreshFood] },
    { title: "Confectionary", link: "/fruits&veg", image: [Confectionary] },
    { title: "Crisps and Snacks", link: "/beverages", image: [Crisps] },
    { title: "Drinks", link: "/babyproducts", image: [Drinks] },
    { title: "Household", link: "/devices", image: [Household] },
    { title: "Personal Care", link: "/electronics", image: [PersonalCare] },
    { title: "Baby & Toddler", link: "/electronics", image: [Baby] },
    { title: "Pets", link: "/electronics", image: [Pets] }
];

const Categories = () => (
    <div className="categories-section">
        <h2 className="categories-title">Categories</h2>
        <div className="categories-container">
            {categories.map((category, index) => (
                <div key={index} className="category-card">
                    <a href={category.link}>
                        <img src={category.image} alt={category.title} className="category-image" />
                        <h3 className="category-title">{category.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default Categories;