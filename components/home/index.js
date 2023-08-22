import React from 'react'
import { Box, Container, Image } from '@chakra-ui/react'

import Hero from './Hero'
import Listings from './Listings'
import About from './About'
import Features from './Features'
import Reviews from './Reviews'
import Form from '../Form'

export default function HomePage() {
  return (
    <>
      <Box>
        <Container maxW='90%'>
          <Box mt={10} />
          <Hero />
          <Box mt={20} />
          <Image alt="awards" src="/awards.png" w="full" />
          <Box mt={16} />
          <Listings />
          <Box mt={16} />
          <About />
          <Box mt={16} />
          <Features />
          <Box mt={16} />
          <Reviews />
          <Box mt={16} />
          <Form />
          <Box mt={16} />
        </Container>
      </Box>
    </>
  )
}
