import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, GridItem, HStack, Heading, Input, Select } from '@chakra-ui/react';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, or, where, getDocs } from 'firebase/firestore'; 

import Card from '../../components/Card';
import { isListingNew } from '../../lib/utils';
import { db } from '../../firebase';
import Link from 'next/link';

const propertyTypes = [
  'All types',
  'Apartments',
  'Houses'
]

const saleMode = [
  "all", 
  'rent',
  'buy',
]

export default function Listings() {
  const listingsRef = collection(db, 'listings')
  const [listings] = useCollectionData(listingsRef)
  
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    mode: 'all'
  })
  // const [filterResults, setFilterResults] = useState([])
  
  const handleSearch = (inputQuery) => {
    setSearchQuery(inputQuery.toLowerCase());
    // console.log(listings)
    // try {
    //   // const filteredListings = listings.filter((listing) => {
    //   //   return listing.addressParts.displayAddress.toLowerCase().includes(inputQuery)
    //   // })
    //   // // console.log(filteredListings)
    //   // setSearchResults(filteredListings);
    // } catch (err) {
    //   console.error('Error searching listings:', err);
    // }
  };

  const filterBySaleMode = (mode) => {
    // console.log(mode)
    setFilters({
      ...filters,
      mode: mode
    })

    // if(mode === 'all') {
    //   setFilterResults([])
    // }

    // try {
    //   const filteredListings = listings.filter((listing) => {
    //     return listing.saleMode === mode
    //   })

    //   // console.log(filteredListings)
    //   setFilterResults(filteredListings)
    // } catch (err) {
    //   console.error('Error switching mode: ', err);
    // }
  }

  const filteredListings = listings?.filter((listing) => {
    const matchesSaleMode = filters.mode === 'all' || listing.saleMode === filters.mode;
    const matchesSearch = !searchQuery || listing.addressParts.displayAddress.toLowerCase().includes(searchQuery);
    return matchesSaleMode && matchesSearch;
  });

  // console.log(listings)

  // console.log(filters.mode)
  return (
    <>
      <Box>
          <Container maxW='90%'>
              <Box mt={16} />
              <Heading as="h1" fontSize="3xl" color="brand.brandOrange">
                All listings
              </Heading>
              <Box mt={10} />
              <Input 
                type="text" 
                fontSize="sm" 
                placeholder='Search by Address, Suburb, Postcode' 
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                />
              <HStack gap={3}>
                <Select default="all" width={110} fontSize="xs" mt={4} onChange={e => filterBySaleMode(e.target.value)}>
                  {saleMode.map(mode => (
                    <option key={mode} value={mode} >
                      {
                        mode === "all" ? "All Listings": (mode ==="rent" ? "For Rent" : "For Sale") 
                      }
                    </option>
                  ))}
                </Select>
              </HStack>
              <Box mt={10} />
              <section>
                <Grid templateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(3, 1fr)']} gap={4} >
                {/* (searchQuery ? searchResults : (filters.mode ? filterResults : listings))? */}
                  {filteredListings?.map(item => (
                    <GridItem key={item.id}>
                      <Link href={`/listings/${encodeURIComponent(item.id)}`}>
                        <Card 
                          isNew={isListingNew(item.dateListed)}
                          listedBy={item.advertiserIdentifiers.agentIds} 
                          imageSrc={item.media[0].url} 
                          address={`${item.addressParts.streetNumber} ${item.addressParts.street}`} 
                          suburb={item.addressParts.suburb} 
                          postcode={item.addressParts.postcode}
                          price={item.priceDetails.displayPrice}
                          bedroom={item.bedrooms} 
                          bathroom={item.bathrooms}
                          landSize={item.landAreaSqm}
                          />
                      </Link>
                    </GridItem>
                  ))}
                </Grid>
              </section>
              <Box mt={16} />
          </Container>
      </Box>
    </>
  )
}




// ARCHIVE:
// const q = query(
      //   listingsRef,
      //   or(
      //     where('addressParts.suburb', '>=', query),
      //     where('addressParts.postcode', '>=', query),
      //     where('addressParts.street', '>=', query)
      //   )
      // )

      // const querySnapshot = await getDocs(q)

      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, "=>", doc.data())
      // })

      // const suburbQuery = query(
      //   listingsRef,
      //   where('addressParts.suburb', '>=', query)
      // );

      // const postcodeQuery = query(
      //   listingsRef,
      //   where('addressParts.postcode', '>=', query)
      // );
      // const streetQuery = query(
      //   listingsRef,
      //   where('addressParts.street', '>=', query)
      // );

      // const [suburbSnapshot, postcodeSnapshot, streetSnapshot] = await Promise.all([
      //   getDocs(suburbQuery),
      //   getDocs(postcodeQuery),
      //   getDocs(streetQuery),
      // ]);

      // const suburbResults = suburbSnapshot.docs.map(doc => doc.data());
      // const postcodeResults = postcodeSnapshot.docs.map(doc => doc.data());
      // const streetResults = streetSnapshot.docs.map(doc => doc.data());

      // const mergedResults = [
      //   ...suburbResults,
      //   ...postcodeResults,
      //   ...streetResults,
      // ];

      // setSearchResults(mergedResults);