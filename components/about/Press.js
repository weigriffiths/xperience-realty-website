import { Box, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import {press} from '../../data/press'

export default function Press() {
  return (
    <section>
      <Heading textAlign="center" as="h1" fontSize="5xl" textColor="brand.brandOrange" mb={6}>Press and Media</Heading>
      <Grid templateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={10} justifyItems="center">
        {press.map(article => (
          <GridItem w={["200px", "250px", "300px", "350px"]} key={article.id} boxShadow="md" borderRadius={20} position="relative" >
            <Link href={article.link}>
              <Image src="/x-badge.svg" position="absolute" top={-4} right={4} alt="x badge" w={"70px"}/>
              <Image src={article.imgUrl} alt={article.id} borderRadius={20} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </section>
  )
}