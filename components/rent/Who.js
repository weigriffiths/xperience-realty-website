import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Who() {
  return (
    <section>
      <VStack spacing={4}>
        <Heading as="h1" fontWeight="light" textTransform="uppercase" textColor="brand.brandOrange">&quot;Wait who even are you guys?&quot;</Heading>
        <Heading as="h2" fontWeight="bold" textTransform="uppercase" textColor="brand.brandPurple">Great Question!</Heading>
          <Text fontSize="lg" textAlign="center" lineHeight={2}>
            Let&apos;s take you back to when the Xperience team were only known as the sexiest sales agents on the block. We closed deals and took names at every corner. Then our sweet, innocent clients came to us (almost on their knees!), begging for help against two property managers called Lack of Communication and Horrendous Handling of Tenant Issues … yeah, they needed to work on their villain names.
          </Text>
          <Text fontSize="lg" textAlign="center" lineHeight={2}>
            Through blood, sweat, and tears, our stoically attractive sales agents came to the rescue! With new-found Super Property Management powers, they swooped in and saved our clients from further financial loss. Okay, so our backstory isn&apos;t really superhero worthy, but our cause is!
          </Text>
          <Text fontSize="lg" textAlign="center" lineHeight={2}>
            Our team of super property managers live to give you the best experience Xperience is known for. Unlike all those superheroes powered by spider bites and groovy gadgets, we&apos;re driven by your happiness and satisfaction. We strive to ensure no property owner will ever again have to beg a sales agent for some decent property management service.
          </Text>
          <Link href="/about">
            <Box as="button" border="1px" borderColor="brand.brandOrange" borderRadius={6} px={4} py={2} _hover={{color: "white", bg: "brand.brandOrange"}} fontWeight="bold">Read More About Us</Box>
          </Link>
      </VStack>
    </section>
  )
}
