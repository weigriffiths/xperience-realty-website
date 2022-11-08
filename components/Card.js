import { AspectRatio, Box, Flex, HStack, Icon, Image, Text, Badge, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBath, FaRuler } from 'react-icons/fa'
import Link from 'next/link'

export default function Card({listedBy, imageSrc, isNew, address, suburb, postcode, price, bedroom, bathroom, landSize}) {
  return (
    <Box w="full" minW="250px" position="relative">
      <Link href="/listing/:id">
        <Box zIndex={10} borderRadius={4} bg="orange.400" textColor="white" position="absolute" px={2} py={0.5} top={2} left={2}>
          <Text fontSize="xs">Listed By {listedBy}</Text>
        </Box>
        <AspectRatio ratio={16 / 9} >
          <Image alt={suburb} src={imageSrc} borderRadius={6} objectFit="cover"/>
        </AspectRatio>
        {/* <Box py={2}>
          <Box display='flex' alignItems='baseline'>
            {isNew ? (<Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>) : null}
            <Box
              color='gray.700'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {bedroom} beds &bull; {bathroom} baths
            </Box>
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            fontSize="sm"
          >
            {address}, {suburb}, {postcode}
          </Box>
          <Box>
            {price}
          </Box>
        </Box> */}
        <Flex justify="space-between">
          <Text fontWeight="bold" fontSize="sm">{address}</Text>
          <Text fontWeight="bold" textColor="brand.brandOrange">{price}</Text>
        </Flex>
        <Text>{suburb}<Text as="span">, {postcode}</Text></Text>
        <Flex justify="space-between">
          <HStack>
            <Icon as={RiHotelBedFill} w={3} h={3} />
            <Text fontSize="xs">{bedroom} bed</Text>
          </HStack>
          <HStack>
            <Icon as={FaBath} w={3} h={3} />
            <Text fontSize="xs">{bathroom} bath</Text>
          </HStack>
          <HStack>
            <Icon as={FaRuler} w={3} h={3} />
            <Text fontSize="xs">{landSize} m<sup>2</sup></Text>
          </HStack>
        </Flex>
      </Link>
    </Box>
  )
}
