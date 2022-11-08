import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import TeamList from './TeamList'

export default function TeamPage() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <TeamList />
          <Box mt={20} />
        </Container>
      </Box>
    </>
  )
}
