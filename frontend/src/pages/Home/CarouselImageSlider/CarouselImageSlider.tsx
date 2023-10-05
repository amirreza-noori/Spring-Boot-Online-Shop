import React, { FC, ReactElement } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

import { PRODUCT } from "../../../constants/routeConstants";
import "./CarouselImageSlider.scss";

import imageSlide1 from './images/main-page-slide-1.jpg'
import imageSlide2 from './images/main-page-slide-2.jpg'
import imageSlide3 from './images/main-page-slide-3.jpg'
import imageSlide4 from './images/main-page-slide-4.png'

export const sliderItems = [
    {
        id: "85",
        name: "Photo 1",
        url: imageSlide1
    },
    {
        id: "46",
        name: "Photo 2",
        url: imageSlide2
    },
    {
        id: "77",
        name: "Photo 3",
        url: imageSlide3
    },
    {
        id: "94",
        name: "Photo 4",
        url: imageSlide4
    }
];

const CarouselImageSlider: FC = (): ReactElement => {
    return (
        <Carousel>
            {sliderItems.map((item) => (
                <div key={item.id} className={"carousel-item-wrapper"}>
                    <Link to={`${PRODUCT}/${item.id}`} className={"carousel-link"} />
                    <img src={item.url} alt={item.name} />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselImageSlider;
