import { Box, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Benefits() {
  return (
    <section>
      <Box bg="brand.brandDark" mx="auto" backgroundImage="url('/rent/bg-rent.webp')" transform="" backgroundSize="cover" overflow="auto" backgroundRepeat="no-repeat" py={10} px={5}>
        <VStack spacing={6}>
          <Heading as="h1" fontWeight="light" textTransform="uppercase" textColor="white">
            &quot;OK, SO WHAT DO I GET OUT OF THIS DEAL?&quot;
          </Heading>
          <Heading as="h2" fontSize="2xl" fontWeight="bold" textTransform="uppercase" textColor="white">Another Great Question!</Heading>
          <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3,1fr)']} gap={5}>
            <GridItem>
              <VStack spacing={3} textColor="white" align="flex-start">
                <Heading as="h3" fontSize="md">&bull; FUN AND ENGAGING PROPERTY ADVERTISING</Heading>
                <Heading as="h3" fontSize="md">&bull; TOP OF THE LINE TENANT AND RENTAL MANAGEMENT</Heading>
                <Heading as="h3" fontSize="md">&bull; FIVE-STAR VIEWINGS WITH OUR SEXY AGENTS AS HOSTS</Heading>
                <Heading as="h3" fontSize="md">&bull; THOROUGH TENANT SCREENING</Heading>
                <Heading as="h3" fontSize="md">&bull; CONDITION REPORT MANAGEMENT</Heading>
              </VStack>
            </GridItem>
            <GridItem justifySelf="center">
              <Image src="/rent/house-graphic.svg" alt="house" w={["150px", "150px", "200px", "250px"]} h={["150px", "150px", "200px", "250px"]} />
            </GridItem>
            <GridItem>
              <VStack spacing={3} textColor="white" align="flex-start">
                  <Heading as="h3" fontSize="md">&bull; PROPERTY VALUE IDENTIFICATION TO FIGURE OUT HOW YOUR PROPERTY CAN DO BETTER</Heading>
                  <Heading as="h3" fontSize="md">&bull; PROACTIVE PROPERTY MAINTENANCE MANAGEMENT</Heading>
                  <Heading as="h3" fontSize="md">&bull; OCD LEVEL INSPECTIONS</Heading>
                  <Heading as="h3" fontSize="md">&bull; FINANCIAL ACCOUNT MANAGEMENT</Heading>
                  <Heading as="h3" fontSize="md">&bull; 100% TENANCY AGREEMENT</Heading>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </section>
  )
}
