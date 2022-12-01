import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AdminNavbarLinks } from './AdminNavbarLinks'
import '../App.css'

const NavbarTop = (props: {
    secondary: boolean;
    message: string | boolean;
    brandText: string;
    logoText: string;
    fixed: boolean;
    onOpen: (...args: any[]) => any;
}) => {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);

        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    });

    const { secondary, brandText } = props;

    let mainText = useColorModeValue('#FF9138', 'white');
    let navbarPosition = 'fixed' as const;
    let navbarFilter = 'none';
    let navbarBackdrop = 'blur(20px)';
    let navbarShadow = 'none';
    let navbarBg = useColorModeValue('rgba(244, 247, 254, 0.2)', 'rgba(11,20,55,0.5)');
    let navbarBorder = 'transparent';
    let secondaryMargin = '0px';
    let paddingX = '15px';
    let gap = '0px';
    const changeNavbar = () => {
        if (window.scrollY > 1) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <Box
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            backgroundPosition='center'
            backgroundSize='cover'
            borderRadius='16px'
            borderWidth='1.5px'
            borderStyle='solid'
            transitionDelay='0s, 0s, 0s, 0s'
            transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
            transition-property='box-shadow, background-color, filter, border'
            transitionTimingFunction='linear, linear, linear, linear'
            alignItems={{ xl: 'center' }}
            display={secondary ? 'block' : 'flex'}
            minH='75px'
            justifyContent={{ xl: 'center' }}
            lineHeight='25.6px'
            mx='auto'
            mt={secondaryMargin}
            right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
            px={{
                sm: paddingX,
                md: '10px'
            }}
            ps={{
                xl: '12px'
            }}
            pt='8px'
            top={{ base: '12px', md: '16px', xl: '18px' }}
            w={{
                base: 'calc(100vw - 6%)',
                md: 'calc(100vw - 8%)',
                lg: 'calc(100vw - 6%)',
                xl: 'calc(100vw - 350px)',
                '2xl': 'calc(100vw - 365px)'
            }}
            // ml="350px"
            className="container-navbar"
        >
            <Box
                w='100%'
                flexDirection={{
                    sm: 'column',
                    md: 'row'
                }}
                alignItems={{ xl: 'center' }}
                mb={gap}
                className="navbar_top"
            >
                <Box mb={{ sm: '8px', md: '0px' }}>
                    <Breadcrumb>
                        <BreadcrumbItem color={mainText} fontSize='sm' mb='0px'>
                            <BreadcrumbLink href='#' color={mainText} _hover={{ color: '#FF9138' }}>
                                Pages
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem color={mainText} fontSize='sm'>
                            <BreadcrumbLink href='#' color={mainText} _hover={{ color: '#FF9138' }}>
                                {brandText}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Link
                        color={mainText}
                        href='#'
                        bg='inherit'
                        borderRadius='inherit'
                        fontWeight='bold'
                        fontSize='34px'
                        _hover={{ color: '#FF9138' }}
                        _active={{
                            bg: 'inherit',
                            transform: 'none',
                            borderColor: 'transparent'
                        }}
                        _focus={{
                            boxShadow: 'none'
                        }}>
                        {brandText}
                    </Link>
                </Box>
            </Box>
            {/* <Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
                <AdminNavbarLinks
                    onOpen={props.onOpen}
                    secondary={props.secondary}
                    fixed={props.fixed}
                />
            </Box> */}
        </Box>
    )
}

export default NavbarTop