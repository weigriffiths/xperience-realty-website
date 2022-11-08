import React, { useEffect } from 'react'
import Link from 'next/link'
import { Box, Flex, Spacer, Heading, Stack, VStack, HStack, Button, Text } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

import styles from '../../styles/Home.module.css'
import SimpleForm from '../SimpleForm'

// https://www.jimraptis.com/blog/build-a-landing-page-with-chakra-ui-part-1    

function Hero() {
    return (
        <section>
            <Box 
            position="absolute"
            top="0"
            right="0"
            zIndex={-100}
            w='100%'
            h='600px'
            transform="skewY(-12deg) translateY(-10rem)"
            bgGradient='linear(to-r, brand.brandOrange, orange.300, brand.brandAmber, brand.brandPurple)'
            />
            <Box 
            position="absolute"
            top="0"
            left="0"
            zIndex={-100}
            w='100%'
            h='600px'
            transform="skewY(12deg) translateY(-10rem)"
            bgGradient='linear(to-r, brand.brandOrange, orange.300, brand.brandAmber, brand.brandPurple)'
            />
            {/* <Box 
            position="absolute"
            top="0"
            right="0"
            zIndex={-80}
            borderBottom="1px"
            borderTop="1px"
            w='100%'
            h='60px'
            transform="skewY(-12deg)"
            />
            <Box 
            position="absolute"
            top="0"
            right="0"
            zIndex={-80}
            borderBottom="1px"
            borderTop="1px"
            w='100%'
            h='60px'
            transform="skewY(12deg) translateY(11rem)"
            /> */}
            <Flex 
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={["column", "column", "column", "row"]}
                wrap="no-wrap"
                minH="70vh"
                >
                <Stack 
                    align={["center", "center", "flex-start", "flex-start"]}
                    spacing={[3, 3, 4, 4, 5]}
                    mr={[0,0,0, 2, 3]}
                    mb={[8,8,8,0,0]}
                    >
                        <Heading 
                            as="h1"
                            size={["lg", "lg", "lg", "lg", "xl"]}
                            fontWeight="bold"
                            color="primary.800"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                            >
                                Marketing Makes <Text as="span" fontWeight="extrabold" textColor="white">The Difference</Text>
                        </Heading>
                        <Heading 
                            as="h2"
                            size={["md", "md", "md", "md", "lg"]}
                            fontWeight="normal"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                            >
                                Brisbane&apos;s <Text as="span" fontWeight="bold">Most Awarded</Text> Real Estate Agent 
                        </Heading>
                        <Heading 
                            as="h2"
                            size={["md", "md", "md", "md", "lg"]}   
                            fontWeight="normal"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                            >
                                Buy, Rent, Sell Today 
                        </Heading>
                        <HStack mt={3}>
                            <Link href="/listings">
                                <Box as="button" px={4} py={2} borderRadius={6} bg="brand.brandBlack" border="2px" borderColor="#000" textColor="white" _focus="none" _hover={{ borderColor: "white", border: "2px"}}>Browse Homes</Box>
                            </Link>
                            <Link href="/team">
                                <Box as="button" px={4} py={2} borderRadius={6} border="2px" borderColor="#000" _focus="none" _hover={{ bg: "brand.lightGrey"}}>Find an Agent</Box>
                            </Link>
                        </HStack>
                </Stack>
                <Spacer/>
                <SimpleForm bgColor="brand.brandDark" textColor="white" />
            </Flex>
        </section>
)
}

export default Hero