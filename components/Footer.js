import { Box, Container, Divider, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import { sitemap } from '../data/sitemap'

export default function Footer() {
  return (
    <footer>
      <Divider />
      <Box py={[5,5,5,20]} >
        <Container maxW="90%">
          <Grid 
            templateColumns={['repeat(4,1fr)','repeat(4,1fr)','repeat(4,1fr)','repeat(5,1fr)']} 
            templateRows={['repeat(3,1fr)', 'repeat(3,1fr)', 'repeat(3,1fr)', '1fr']} 
            alignItems="flex-start"
            gap={8}
            >
            <GridItem alignSelf={["center", "center", "center"]} mx="auto" colSpan={[4, 4, 4, 1]} >
              <Image src="/xperience-logo-dark.svg" alt="logo" w={"200px"}/>
            </GridItem>
            {sitemap.map(site => (
              <GridItem key={site.section} colSpan={[2, 2, 2, 1]}>
                <VStack spacing={5}>
                  <Heading as="h1" fontSize="md">{site.section}</Heading>
                  {site.pages.map(page => (
                    <VStack key={page.title}>
                      <Link href={page.url} >
                        <Heading as="h2" fontSize="sm" fontWeight="normal">{page.title}</Heading>
                      </Link>
                    </VStack>
                  ))}
                </VStack>
              </GridItem>
            ))}
          </Grid>

        </Container>
      </Box>
    </footer>
  )
}
