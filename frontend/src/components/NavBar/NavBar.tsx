import { FC, ReactElement, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginOutlined, LogoutOutlined, ShoppingCartOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import { Affix, Badge, Col, Menu, MenuProps, Row } from "antd";

import { selectUserFromUserState } from "../../redux-toolkit/user/user-selector";
import { selectCartItemsCount } from "../../redux-toolkit/cart/cart-selector";
import { logoutSuccess } from "../../redux-toolkit/user/user-slice";
import { ACCOUNT, BASE, CONTACTS, LOGIN, MENU, REGISTRATION } from "../../constants/routeConstants";
import { CART } from "../../constants/urlConstants";
import "./NavBar.scss";

const NavBar: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const usersData = useSelector(selectUserFromUserState);
    const cartItemsCount = useSelector(selectCartItemsCount);

    const handleLogout = (): void => {
        localStorage.removeItem("token");
        dispatch(logoutSuccess());
    };

    const handleMenuItemClick: MenuProps['onClick'] = (e) => history.push(e.key);

    const items: MenuProps['items'] = useMemo(() => [
        {
            label: 'Home',
            key: BASE
        },
        {
            label: 'Products',
            key: MENU,
        },
        {
            label: "CONTACTS",
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
        ...(usersData ? (
            [{
                label: "MY ACCOUNT",
                key: ACCOUNT,
                icon: <UserOutlined />
            },
            {
                label: "EXIT",
                key: BASE,
                icon: <LogoutOutlined />,
                onClick: handleLogout,
            }]
        ) : (
            [{
                label: "SIGN IN",
                key: LOGIN,
                icon: <LoginOutlined />
            },
            {
                label: "SIGN UP",
                key: REGISTRATION,
                icon: <UserAddOutlined />,
            }]
        ))
    ], [cartItemsCount, usersData?.id]);


    return (
        <>
            <Affix>
                <div className={"navbar-wrapper"}>
                    <Row justify={"space-between"}>
                        <Col xs={{ span: 24 }} sm={{ span: 4 }} className="navbar-logo">
                            <img alt={"navbar-logo"} src="https://i.ibb.co/fqYvrL8/LOGO4.jpg" />
                        </Col>
                        <Col xs={{ span: 0 }} sm={{ span: 20 }}>
                            <Menu onClick={handleMenuItemClick} selectedKeys={[location.pathname]} mode="horizontal" items={items} />
                        </Col>
                    </Row>
                </div>
            </Affix >
        </>
    );
};

export default NavBar;
