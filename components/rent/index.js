import { Box, Center, Divider, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Who from './Who'
import Benefits from './Benefits'
import Why from './Why'
import SocialProof from './SocialProof'
import Form from '../Form'


export default function index() {
  return (
    <>
      <Box textAlign="center" py={10}>
        <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange"> 
          Super Property Managers = Super Financial Returns
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          You&apos;ll be giddy over our award winning service in 90 days or we work for free!
        </Text>
      </Box>
      <Divider />
      <Box mt={16} />
      <Who />
      <Box mt={16} />
      <Benefits />
      <Box mt={16} />
      <Why />
      {/* <Box mt={16} /> */}
      {/* <SocialProof /> */}
      <Box mt={16} />
      <VStack spacing={8}>
        <Heading as="h1" textTransform="uppercase" fontWeight="light" color="brand.brandOrange">
          And as you can see, we&apos;re more than qualified!
        </Heading>
        <Image src="/awards-stack.svg" alt="awards" w="40%" />
        <Heading as="h1" textTransform="uppercase" fontWeight="light" color="brand.brandOrange">
          We&apos;ve also been featured in:
        </Heading>
        <Image src="/rent/featured-articles-banner.webp" alt="awards" />
      </VStack>
      <Box mt={16} />
      <Form />
      <Box mt={16} />
    </>
  )
}
