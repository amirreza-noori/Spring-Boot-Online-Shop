import React, { FC, ReactElement, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import { useTranslation } from "react-i18next";

const Contacts: FC = (): ReactElement => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ContentWrapper>
            <ContentTitle icon={<InfoCircleOutlined />} title={t("contacts")} />
            <Row gutter={32}>
                <Col span={24}>
                    <div>
                        <Typography.Text strong>{t("tel")} :</Typography.Text>
                        <Typography.Text>021122323</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text strong>{t("email")} :</Typography.Text>
                        <Typography.Text>behtarin@gmail.com</Typography.Text>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <Typography.Text strong>{t("workingTime")}</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text>{t("workingTimeInfo")}</Typography.Text>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <Typography.Text strong>{t('delivery')}</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text>{t('deliveryInfo')}</Typography.Text>
                    </div>
                </Col>
            </Row>
        </ContentWrapper>
    );
};

export default Contacts;
