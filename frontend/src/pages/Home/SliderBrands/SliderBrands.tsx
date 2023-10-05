import { FC, ReactElement } from "react";
import { Carousel, Typography, Grid } from "antd";

import { brandsItem } from "./SliderBrandsData";
import SliderBrandsItem from "./SliderBrandsItem/SliderBrandsItem";
import "./SliderBrands.scss";
import { useTranslation } from "react-i18next";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SliderBrandItem from "./SliderBrandsItem/SliderBrandItem";

const { useBreakpoint } = Grid;
const SliderBrands: FC = (): ReactElement => {
    const { t } = useTranslation();
    const screens = useBreakpoint();

    return (
        <ContentWrapper className={"brands-wrapper"}>
            <Typography.Title level={3} className={"brands-wrapper-title"}>
                {t('brands')}
            </Typography.Title>
            {screens.xs && <Carousel className={"brands-carousel"} autoplay>
                {brandsItem.map((brandItem, brandIndex) =>
                    <SliderBrandItem brand={brandItem} key={brandIndex} />
                )}
            </Carousel>}
            {screens.md && <Carousel className={"brands-carousel"} autoplay>
                <SliderBrandsItem brands={brandsItem.slice(0, 6)} />
                <SliderBrandsItem brands={brandsItem.slice(6, 12)} />
                <SliderBrandsItem brands={brandsItem.slice(12, 18)} />
            </Carousel>}
        </ContentWrapper >
    );
};

export default SliderBrands;
