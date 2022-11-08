import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import RentPage from '../components/rent'

export default function rent() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <RentPage />
        </Container>
      </Box>
    </>
  )
}
