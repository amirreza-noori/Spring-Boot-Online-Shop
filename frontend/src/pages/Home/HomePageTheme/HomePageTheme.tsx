import { FC } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

import { MENU } from "../../../constants/routeConstants";
import "./HomePageTheme.scss";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const HomePageTheme: FC = () => {
    return (
        <ContentWrapper className={"page-theme"}>
            <Row gutter={[32, 32]}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Link to={{ pathname: MENU, state: { id: "female" } }}>
                        <img src="https://i.ibb.co/jMmJs60/Them-Woman-ENG.jpg" alt={"female"} />
                    </Link>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Link to={{ pathname: MENU, state: { id: "male" } }}>
                        <img src="https://i.ibb.co/mJGKz8c/Them-Man-ENG.jpg" alt={"male"} />
                    </Link>
                </Col>
            </Row>
        </ContentWrapper>
    );
};

export default HomePageTheme;
