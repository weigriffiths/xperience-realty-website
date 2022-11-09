import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Form from '../Form'
import Awards from './Awards'
import Highlights from './Highlights'

import Opening from './Opening'
import Press from './Press'
import Story from './Story'

export default function AboutPage() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <Box mt={16} />
          <Opening />
          <Box mt={16} />
          <Story />
          <Box mt={16} />
          <Highlights />
          <Box mt={16} />
          <Awards />
          <Box mt={16} />
          <Press />
          <Box mt={16} />
          <Form />
          <Box mt={16} />
        </Container>
      </Box>
    </>
  )
}
