import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Grid, Typography } from "antd";

import { selectPerfumes } from "../../../redux-toolkit/perfumes/perfumes-selector";
import { fetchPerfumesByIds } from "../../../redux-toolkit/perfumes/perfumes-thunks";
import { resetPerfumesState } from "../../../redux-toolkit/perfumes/perfumes-slice";
import PerfumeCardsSliderItem from "./PerfumeCardsSliderItem/PerfumeCardsSliderItem";
import "./PerfumeCardsSlider.scss";
import { useTranslation } from "react-i18next";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import PerfumeCard from "../../../components/PerfumeCard/PerfumeCard";

export const perfumesIds = [26, 43, 46, 106, 34, 76, 82, 85, 27, 39, 79, 86];


const { useBreakpoint } = Grid;
const PerfumeCardsSlider: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const perfumes = useSelector(selectPerfumes);
    const { t } = useTranslation();
    const screens = useBreakpoint();

    useEffect(() => {
        // GraphQL example
        // dispatch(fetchPerfumesByIdsQuery(perfumesId));
        dispatch(fetchPerfumesByIds(perfumesIds));

        return () => {
            dispatch(resetPerfumesState());
        };
    }, []);

    return (
        <ContentWrapper className={"perfume-cards-slider"}>
            <Typography.Title level={3} className={"perfume-cards-slider-title"}>
                {t('specialOffers')}
            </Typography.Title>
            {screens.xs && <Carousel>
                {perfumes.map((perfume) =>
                    <PerfumeCard key={perfume.id} perfume={perfume} colSpan={24} />
                )}
            </Carousel>}
            {screens.md && <Carousel>
                <PerfumeCardsSliderItem perfumes={perfumes.slice(0, 4)} />
                <PerfumeCardsSliderItem perfumes={perfumes.slice(4, 8)} />
                <PerfumeCardsSliderItem perfumes={perfumes.slice(8, 12)} />
            </Carousel>}

        </ContentWrapper>
    );
};

export default PerfumeCardsSlider;
