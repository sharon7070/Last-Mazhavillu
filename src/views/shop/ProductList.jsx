
import React, { useState } from "react";
import "../../assets/css/ProductList.css";
import Filter from "./Filters";
import card_1 from "../../assets/images/card_1.png";
import card_2 from "../../assets/images/card_2.png";
import card_3 from "../../assets/images/card_3.png";
import card_4 from "../../assets/images/card_4.png";
import card_5 from "../../assets/images/card_5.png";
import card_6 from "../../assets/images/card_6.png";
import card_7 from "../../assets/images/card_7.png";
import card_8 from "../../assets/images/card_8.png";

const products = [
    { img: card_1, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_2, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_3, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_4, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_5, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_6, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_7, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
    { img: card_8, title: "KOTTHAS KITCHEN", subtitle: "Chicken Masala (100g)", rating: 4.8, reviews: "10k", price: 59, offerPrice: 55 },
];

export default function ProductList() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sortOption, setSortOption] = useState("Select");

    const handleSortSelect = (option) => {
        setSortOption(option);
        setShowDropdown(false);
        console.log("Selected sort:", option);
    };

    return (
        <div className="pro-list">
            <div className="container-fluid totalcontainer">
                <div className="row d-flex filterpagerow ">
                    {/* Filter Sidebar */}

                    <Filter />
                    {/* Product Cards Section */}
                    <div className="col-lg-9">
                        <div className="row mb-3 align-items-center">
                            <div className="col-md-6 showing">Showing 1-20 of 85 result</div>
                            <div className="col-md-6   position-relative">
                                <b>Sort By : </b>
                                <button
                                    className="btn sortbybtn"
                                    onClick={() => setShowDropdown(prev => !prev)}
                                >
                                    {sortOption}    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </button>

                                {showDropdown && (
                                    <ul className="sort-dropdown">
                                        <li onClick={() => handleSortSelect("Popular")}>Popular</li>
                                        <li onClick={() => handleSortSelect("Trend")}>Trend</li>
                                        <li onClick={() => handleSortSelect("Organic")}>Organic</li>
                                        <li onClick={() => handleSortSelect("High quality")}>High quality</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="row">
                                {products.map((product, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card productitemcardone">
                                            <div className="cardimgdiv2filterpage position-relative">
                                                <img className="topimg2filterpage" src={product.img} alt={product.subtitle} />
                                                <div className="icons">
                                                    <svg className="wishlisttopfilterpage bi bi-suit-heart-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                                    </svg>
                                                    <svg className="carttopfilterpage bi bi-cart-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h2 className="card-title">{product.title}</h2>
                                                <h6 className="subheading2">{product.subtitle}</h6>
                                                <h5 className="card-text">
                                                    {product.rating} <span className="star">★</span> ({product.reviews})
                                                </h5>
                                                <div className="d-flex justify-content-between align-items-center mt-2">
                                                    <div>
                                                        ₹{product.price.toFixed(2)}{" "}
                                                        <span><b>₹{product.offerPrice.toFixed(2)}</b></span>
                                                    </div>
                                                    <button className="btn topbtnbuynow"><b>Buy Now</b></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}
