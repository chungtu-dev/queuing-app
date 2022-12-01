import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { HorizonLogo } from './helper/icons/Icons'
import { HSeparator } from './helper/Separator'

import {LogoAlta} from '../assets/img'
import '../App.css'

const Brand = () => {
    let logoColor = useColorModeValue('navy.700', 'white');
    return (
        <Flex alignItems='center' flexDirection='column'>
            {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
            <img src={LogoAlta} alt="logo-alta" className="sidebar-logo-alta"/>
            <HSeparator mb='20px' />
        </Flex>
    )
}

export default Brand