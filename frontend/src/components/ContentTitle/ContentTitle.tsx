import React, { FC, ReactElement, ReactNode } from "react";
import { Space, Typography } from "antd";

import "./ContentTitle.scss";

type PropsType = {
    icon?: ReactNode;
    title: string;
    titleLevel?: 1 | 2 | 3 | 4 | 5;
};

const ContentTitle: FC<PropsType> = ({ icon, title, titleLevel }): ReactElement => {
    return (
        <div className={'content-title'}>
            <Space align="center" className={"title-icon"}>
                {icon}
                <Typography.Title level={titleLevel}>{title}</Typography.Title>
            </Space>
        </div>
    );
};

export default ContentTitle;
