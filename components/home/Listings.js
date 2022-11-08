import { Box, Container, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

import Card from '../Card'
import { listings } from '../../data/dummy'

export default function Listings() {
  return (
    <section>
      <Heading as="h1" fontSize="xl" mb={5}>
        All Listings
      </Heading>
      <HStack overflowX="scroll" spacing={4}>
        {listings.map(listing => (
          <Card 
            key={listing.id}
            isNew={true}
            listedBy={listing.listedBy} 
            imageSrc={listing.imageSrc} 
            address={listing.address} 
            suburb={listing.suburb} 
            postcode={listing.postcode}
            price={listing.price}
            bedroom={listing.bedroom} 
            bathroom={listing.bathroom}
            landSize={listing.floorSpace}
            />
        ))}
      </HStack>
      <Link href="/listings" >
        <Flex mt={5} align="center" >
            <Text font="md" fontWeight="bold">Browse all listings</Text>
          <Icon as={HiArrowNarrowRight} ml={3}/>
        </Flex>
      </Link>
    </section>
  )
}
