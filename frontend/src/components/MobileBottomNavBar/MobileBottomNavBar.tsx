import { FC, ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { HomeFilled, LoginOutlined, ShoppingCartOutlined, AppstoreOutlined, UserOutlined, ContactsOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import { Badge, Col, Menu, MenuProps, Row } from "antd";

import { selectUserFromUserState } from "../../redux-toolkit/user/user-selector";
import { selectCartItemsCount } from "../../redux-toolkit/cart/cart-selector";
import { ACCOUNT, BASE, CONTACTS, LOGIN, MENU } from "../../constants/routeConstants";
import { CART } from "../../constants/urlConstants";
import "./MobileBottomNavBar.scss";

const MobileBottomNavBar: FC = (): ReactElement => {
    const location = useLocation();
    const history = useHistory();
    const usersData = useSelector(selectUserFromUserState);
    const cartItemsCount = useSelector(selectCartItemsCount);

    const handleMenuItemClick: MenuProps['onClick'] = (e) => history.push(e.key);

    const items: MenuProps['items'] = useMemo(() => [
        {
            label: <HomeFilled />,
            key: BASE
        },
        {
            label: <AppstoreOutlined />,
            key: MENU,
        },
        {
            label: <ContactsOutlined />,
            key: CONTACTS,
        },
        {
            label: (
                <Badge count={cartItemsCount} size="small" color={"green"}>
                    <ShoppingCartOutlined />
                </Badge>
            ),
            className: "navbar-cart",
            key: CART,
        },
        (usersData ? ({
            key: ACCOUNT,
            label: <UserOutlined />
        }) : ({
            key: LOGIN,
            label: <LoginOutlined />
        }))
    ], [cartItemsCount, usersData?.id]);
    console.log(items);


    return (
        <>
            <div className={"mobile-bottom-navbar-wrapper"}>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 0 }}>
                        <Menu onClick={handleMenuItemClick} selectedKeys={[location.pathname]} mode="horizontal" items={items} />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default MobileBottomNavBar;
