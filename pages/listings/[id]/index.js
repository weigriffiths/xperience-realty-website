import { useRouter } from 'next/router'
import React, { useRef, useEffect} from 'react'
import { Box, Container, Flex, Icon, HStack, Heading, Text, Center, AspectRatio } from '@chakra-ui/react'
import { collection, doc, getDoc, query } from 'firebase/firestore'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'
import { register } from 'swiper/element/bundle';
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBath, FaRuler } from 'react-icons/fa'
import Image from 'next/image'

register()

export default function ListingPage() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // Ensure swiperElRef.current is not null before adding event listeners
        if (swiperElRef.current) {
            // listen for Swiper events using addEventListener
            swiperElRef.current.addEventListener('progress', (e) => {
                const [swiper, progress] = e.detail;
                console.log(progress);
            });

            swiperElRef.current.addEventListener('slidechange', (e) => {
                console.log('slide changed');
            });
        }

        // Remove event listeners when the component unmounts
        // return () => {
        //     if (swiperElRef.current) {
        //         swiperElRef.current.removeEventListener('progress');
        //         swiperElRef.current.removeEventListener('slidechange');
        //     }
        // };
    }, []);

    const router = useRouter()
    const id = router.query.id

    // const listingRef = doc(db, 'listings', Number(id))
    // const [listing, loading, error] = useDocumentData(listingRef)
    const listingsRef = collection(db, 'listings')
    const [listings] = useCollectionData(listingsRef)

    if (!listings) {
        return <p>Loading...</p>; // Add a loading indicator
    }

    // Get Document matching ID
    const listingById = listings.filter(listing => listing.id === Number(id))[0]

    if (!listingById) {
        return <p>Listing not found.</p>; // Handle the case where listingById is undefined
    }

    console.log(listingById)

    return (
        <>
            <Box>
                <Container maxW='60%'>
                    <Box mt={10} />
                    <Heading as="h1" fontSize="2xl">{listingById.addressParts.displayAddress}</Heading>
                    <Box mt={2} />
                    <Flex justify="space-start" gap={4}>
                        <HStack>
                        <Icon as={RiHotelBedFill} w={3} h={3} />
                        <Text fontSize="sm">{listingById.bedrooms} bed</Text>
                        </HStack>
                        <HStack>
                        <Icon as={FaBath} w={3} h={3} />
                        <Text fontSize="sm">{listingById.bathrooms} bath</Text>
                        </HStack>
                        {
                            listingById.landAreaSqm && (
                            <HStack>
                                <Icon as={FaRuler} w={3} h={3} />
                                <Text fontSize="sm">{listingById.landAreaSqm} m<sup>2</sup></Text>
                            </HStack>
                            )
                        }
                    </Flex>
                    <Box mt={10} />
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view="1"
                        navigation="true"
                        >
                        {
                            listingById.media.map(image => (
                                <swiper-slide key={image.url}>
                                    <Center>
                                        {image.url.includes('youtu.be')? (
                                            <AspectRatio ratio={16 / 9} borderRadius={8} boxShadow="lg" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px"]} w="600px">
                                                <iframe src={image.url} title="YouTube video"  />
                                            </AspectRatio>
                                        ): (
                                            <Image src={image.url} width={600} height={0} alt={image.category} />

                                        )}
                                    </Center>
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>  
                    <Box mt={10} />
                    <section id="description">
                        <Box maxW="80%">
                            <Heading as="h1" fontSize="2xl" mb={3} color="brand.brandOrange">{listingById.priceDetails.displayPrice}</Heading>
                            <Heading as="h2" fontSize="xl" mb={3}>{listingById.headline}</Heading>
                            {listingById.description.split('\n').map((paragraph, index) => (
                                <Text key={index} fontSize="sm" mb={3}>
                                    {paragraph}
                                </Text>
                            ))}
                        </Box>
                    </section>
                    <Box mt={10} />
                    <section>
                        Enquire Now
                        {/* <Heading as="h2" fontSize="xl">Listed by {listingById.advertiserIdentifiers.agentIds}</Heading> */}
                    </section>
                </Container>
            </Box>
        </>
    )
}

// export async function getServerSideProps({ params: { id }}) {
//     try {
//         // const listingSnapshot = doc(db, 'listings', id);
//         const listingRef = id ? doc(db, 'listings', id) : null;
//         if(listingRef) {
//             const [listingData] = useDocumentData(listingRef)
//             console.log('Listing Data:', listingData);
//             return {
//                 props: {
//                     listing: listingData,
//                 },
//             }
//         } else {
//             console.log('Listing Not Found');
//             return {
//                 props: {},
//             };
//         }
//     } catch (error) {
//         console.error('Error fetching listing:', error);
//         return {
//             props: {},
//         };
//     }
// }