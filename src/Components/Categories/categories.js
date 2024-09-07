import React from 'react';
import './categories.css';
import FreshFood from '../../Assets/Images/freshfood-img.png';
import Confectionary from '../../Assets/Images/confectionary-img.png';
import Crisps from '../../Assets/Images/crisps-img.png';

const categories = [
    { title: "Fresh Food", link: "/freshfood", image:[FreshFood] },
    { title: "Confectionary", link: "/fruits&veg", image: [Confectionary] },
    { title: "Crisps and Snacks", link: "/beverages", image: [Crisps] },
    { title: "Drinks", link: "/babyproducts", image: "path/to/drinks.jpg" },
    { title: "Household", link: "/devices", image: "path/to/household.jpg" },
    { title: "Personal Care", link: "/electronics", image: "path/to/personalcare.jpg" },
    { title: "Baby & Toddler", link: "/electronics", image: "path/to/baby.jpg" },
    { title: "Pets", link: "/electronics", image: "path/to/pets.jpg" }
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