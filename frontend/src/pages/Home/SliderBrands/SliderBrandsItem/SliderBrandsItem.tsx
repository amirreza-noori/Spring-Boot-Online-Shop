import { Row } from "antd";
import React, { FC, ReactElement } from "react";
import "./SliderBrandsItem.css";
import SliderBrandItem from "./SliderBrandItem";

export type BrandType = {
    name: string;
    url: string;
};

type PropsType = {
    brands: Array<BrandType>;
};

const SliderBrandsItem: FC<PropsType> = ({ brands }): ReactElement => {
    return (
        <Row>
            {brands.map((brand: BrandType, index: number) => (
                <SliderBrandItem brand={brand} key={index} span={4} />
            ))}
        </Row>
    );
};

export default SliderBrandsItem;
