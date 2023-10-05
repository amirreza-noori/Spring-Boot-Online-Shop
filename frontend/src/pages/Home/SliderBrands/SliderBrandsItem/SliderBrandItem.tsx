import { Col } from "antd";
import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { MENU } from "../../../../constants/routeConstants";
import "./SliderBrandsItem.css";

export type BrandType = {
    name: string;
    url: string;
};

type PropsType = {
    brand: BrandType;
    span?: number
};

const SliderBrandItem: FC<PropsType> = ({ brand, span }): ReactElement => {
    return (
        <Col span={span ?? 24} className={"slider-brand-item"}>
            <Link className={"slider-brand-item-link"} to={{ pathname: MENU, state: { id: brand.name } }} />
            <img style={{ width: "80%" }} src={brand.url} alt={brand.name} />
        </Col>

    );
};

export default SliderBrandItem;
