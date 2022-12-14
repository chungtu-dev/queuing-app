import React from 'react'

import { useDisclosure, Container, Box, Flex, Text, Icon, useColorModeValue, Checkbox } from '@chakra-ui/react';

import Card from '../common/Card'
import IconBox from '../common/helper/icons/IconBox'
import Menu from '../common/MenuDropdown'

import { MdCheckBox, MdDragIndicator } from 'react-icons/md';

const SettingContent = (props: { [x: string]: any }) => {

    const { ...rest } = props;

    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const boxBg = useColorModeValue('secondaryGray.300', 'navy.700');
    const brandColor = useColorModeValue('brand.500', 'brand.400');

    return (
        <>
            <Card p='20px' alignItems='center' flexDirection='column' w='100%' {...rest}>
                <Flex>
                    <IconBox
                        me='12px'
                        w='38px'
                        h='38px'
                        bg={boxBg}
                        icon={<Icon as={MdCheckBox} color={brandColor} w='24px' h='24px' />}
                    />

                    <Text color={textColor} fontSize='lg' fontWeight='700'>
                        Tasks
                    </Text>
                    <Menu ms='auto' />
                </Flex>
                <Box px='11px' w='100%'>
                    <Flex w='100%' justify='space-between' mb='20px'>
                        <Checkbox me='16px' colorScheme='brandScheme' />
                        <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                            Landing Page Design
                        </Text>
                        <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' />
                    </Flex>
                    <Flex w='100%' justify='space-between' mb='20px'>
                        <Checkbox me='16px' defaultChecked colorScheme='brandScheme' />
                        <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                            Dashboard Builder
                        </Text>
                        <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' />
                    </Flex>
                    <Flex w='100%' justify='space-between' mb='20px'>
                        <Checkbox defaultChecked me='16px' colorScheme='brandScheme' />
                        <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                            Mobile App Design
                        </Text>
                        <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' />
                    </Flex>
                    <Flex w='100%' justify='space-between' mb='20px'>
                        <Checkbox me='16px' colorScheme='brandScheme' />
                        <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                            Illustrations
                        </Text>
                        <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' />
                    </Flex>
                    <Flex w='100%' justify='space-between' mb='20px'>
                        <Checkbox defaultChecked me='16px' colorScheme='brandScheme' />
                        <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                            Promotional LP
                        </Text>
                        <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' />
                    </Flex>
                </Box>
            </Card>
        </>
    )
}

export default SettingContent