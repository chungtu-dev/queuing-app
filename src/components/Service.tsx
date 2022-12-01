import React, { useEffect, useState } from 'react'

import routes from '../common/helper/routes'
import { Row, Col } from 'react-bootstrap';
import { useDisclosure, Container } from '@chakra-ui/react';
import NavbarTop from '../common/Navbar'
import '../App.css'
import Sidebar from '../common/Sidebar'
import TableServie from '../common/TableService'

import tableDataComplex from '../common/helper/variables/tableDataComplex.json'
import { columnsDataComplex } from '../common/helper/variables/columnsData'

export interface RoutesType {
    name: string;
    layout: string;
    // component: () => JSX.Element;
    icon: JSX.Element | string;
    path: string;
    // secondary?: boolean;
}

const Service = (props: { [x: string]: any }) => {

    // #region function navbar
    const { onOpen } = useDisclosure();
    const [fixed] = useState(false);
    const { ...rest } = props;

    const getActiveRoute = (routes: RoutesType[]): string => {
        let activeRoute = 'Dashboard';
        for (let i = 0; i < routes.length; i++) {
            if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
                return routes[i].name;
            }
        }
        return activeRoute;
    };
    const getActiveNavbar = (routes: RoutesType[]): boolean => {
        let activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
                return true;
            }
        }
        return activeNavbar;
    };
    const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
        let activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
                return routes[i].name;
            }
        }
        return activeNavbar;
    };
    // #endregion

    return (
        <>
            <NavbarTop onOpen={onOpen}
                logoText={'Alta Media'}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
            />

            <Row>
                <Row className="row-l-sidebar">
                    <Col>
                        <Sidebar routes={routes} />
                    </Col>
                </Row>
            </Row>
            <Container className="container-table-data">
                <TableServie columnsData={columnsDataComplex}
                    tableData={tableDataComplex}
                />
            </Container>
        </>
    )
}

export default Service