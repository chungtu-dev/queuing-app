import React from 'react'
import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { MdUpgrade } from "react-icons/md";

const ItemContent = (props: { info: string }) => {
    return (
        <>
            <Flex
                justify='center'
                align='center'
                borderRadius='16px'
                minH={{ base: "60px", md: "70px" }}
                h={{ base: "60px", md: "70px" }}
                minW={{ base: "60px", md: "70px" }}
                w={{ base: "60px", md: "70px" }}
                me='14px'
                bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'>
                <Icon as={MdUpgrade} color='white' w={8} h={14} />
            </Flex>
            <Flex flexDirection='column'>
                <Text
                    mb='5px'
                    fontWeight='bold'
                    color="red"
                    fontSize={{ base: "md", md: "md" }}>
                    New Update: {props.info}
                </Text>
                <Flex alignItems='center'>
                    <Text
                        fontSize={{ base: "sm", md: "sm" }}
                        lineHeight='100%'
                        color="red">
                        A new update for your downloaded item is available!
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

export default ItemContent