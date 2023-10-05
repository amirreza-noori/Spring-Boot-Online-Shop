import React, { FC, ReactElement } from "react";
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer: FC = (): ReactElement => {
    const { t } = useTranslation();
    return (
        <div className={"footer-wrapper"}>
            <Row >
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <Typography.Title level={3}>{t('site-title')}</Typography.Title>
                    <Typography.Text>{t('telX', { tel: '0293432' })}</Typography.Text>
                    <Typography.Text className={"mt-12"}>{t('workingTimeInfo')}</Typography.Text>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <div className={"footer-wrapper-social"}>
                        <Typography.Title level={3}>{t('socialMedia')}</Typography.Title>
                        <a href="https://www.linkedin.com/in/merikbest/">
                            <LinkedinOutlined />
                        </a>
                        <a href="#facebook">
                            <FacebookOutlined />
                        </a>
                        <a href="#twitter">
                            <TwitterOutlined />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className={"footer-wrapper-copyright"}>
                <Typography.Text>{t('footerCopyright')}</Typography.Text>
            </Row>
        </div>
    );
};

export default Footer;
