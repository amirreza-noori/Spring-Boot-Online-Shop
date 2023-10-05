import React, { FC, ReactElement } from "react";
import { Layout } from "antd";

import "./ContentWrapper.css";
import { BasicProps } from "antd/lib/layout/layout";


const ContentWrapper: FC<BasicProps & React.RefAttributes<HTMLElement>> = ({ children, className, ...props }): ReactElement => {
    return (
        <Layout>
            <Layout.Content
                className={"content-wrapper " + (className ?? '')}
                {...props}>
                {children}
            </Layout.Content>
        </Layout>
    );
};

export default ContentWrapper;
