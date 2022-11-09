import React from 'react'
import Link from 'next/link'
import { Flex, Heading, Image, Text, VStack, Icon, AspectRatio } from '@chakra-ui/react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function About() {
  return (
    <section>
      <Flex direction={["column", "column", "row", "row", "row"]} align="center" justify={["space-around", "space-around", "space-between"]}>
        <VStack spacing={3} align="start" maxW={["100%","100%","100%","100%", "40%"]} mb={[4, 4, 0]} mr={[0,0,6]}>
          <Text fontSize="sm" fontWeight="bold" textColor="brands.midGrey">Your Trusted Agents</Text>
          <Heading as="h1">Real Estate is <Text as="span" textColor="brand.brandOrange">Simple</Text> With Xperience Realty </Heading>
          <Heading as="h2" fontSize="md">
            We have been helping Brisbane families buy and sell Real Estate for over 9 years! We would love to serve you too. 
            </Heading>
          <Link href="/team">
            <Heading mt={4} as="h3" fontSize="md" fontWeight="bold" >
              Connect With Us
            </Heading>
            <Text fontSize="sm">
              We have Residential, Commercial, and Rental specialists ready to walk you through the process, no matter your needs.
            </Text>
            <Flex mt={5} align="center" >
              <Text font="md" fontWeight="bold">Find An Agent</Text>
              <Icon as={HiArrowNarrowRight} ml={3}/>
            </Flex>
          </Link>
        </VStack>
        {/* <Image borderRadius={8} boxShadow="lg" objectFit="cover" alt="front office" src="/front-office.jpg" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px"]}/> */}
        <AspectRatio ratio={16 / 9} borderRadius={8} boxShadow="lg" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px"]} w="720px">
          <iframe src="https://www.youtube.com/embed/PrJdcmZqj8g?autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
        </AspectRatio>
      </Flex>

    </section>
  )
}
