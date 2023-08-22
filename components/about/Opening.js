import { Flex, Image, Text, Heading, VStack, Box, AspectRatio } from '@chakra-ui/react'
import React from 'react'

export default function Opening() {
  return (
    <section >
      <Heading textAlign="center" mb={6} as="h1" fontSize="3xl" color="brand.brandOrange" textTransform="capitalize" >Xperience The Difference</Heading>
      <Flex direction={["column", "column", "row"]} justify="space-between">
        <VStack spacing={4} mr={[0,0,5]} mb={[5,5,0]} lineHeight={2}>
          <Box textAlign="left">
            <Text>We pride ourselves on being your friendly local neighbourhood agents. We&apos;ve sold hundreds of properties in Brisbane, and we&apos;ve picked up plenty of awards along the way.</Text>
            <br/>
            <Text>So if you want an appraisal, or a market update, we&apos;re more than happy to oblige.</Text>
            <br/>
            <Text>We also have an Award-Winning property management department.</Text>
            <br/>
            <Text>If your property is vacant, or if you&apos;re just not happy with your current management company, we&apos;d love to help with that too!</Text>
          </Box>

        </VStack>
        <Image borderRadius={8} boxShadow="lg" objectFit="cover" alt="front office" src="/front-office.jpg" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px", "250px", "300px","400px"]}/>
      </Flex>
    </section>
  )
}
