import { Box, Container, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'


import Card from '../Card'
import { db } from '../../firebase'
import { isListingNew } from '../../lib/utils'

export default function Listings() {
  const listingsRef = collection(db, 'listings')
  const [listings, loading, error] = useCollectionData(listingsRef)
  
  const getSaleListings = listings?.filter(listing => listing.saleMode === 'buy').slice(0,10)
  
  return (
    <section>
      <Heading as="h1" fontSize="xl" mb={5}>
        All Listings
      </Heading>
      <HStack overflowX="scroll" spacing={4} align="start">
        {getSaleListings?.map(item => (
          <Card 
            // onClick={router.push(`/listings/${item.id}`)}
            key={item.id}
            isNew={isListingNew(item.dateListed)}
            listedBy={item.advertiserIdentifiers.agentIds[0]} 
            imageSrc={item.media[0].url} 
            address={`${item.addressParts.streetNumber} ${item.addressParts.street}`} 
            suburb={item.addressParts.suburb} 
            postcode={item.addressParts.postcode}
            price={item.priceDetails.displayPrice}
            bedroom={item.bedrooms} 
            bathroom={item.bathrooms}
            landSize={item.landAreaSqm}
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
