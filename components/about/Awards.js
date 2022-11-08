import { VStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function Awards() {
  return (
    <section>
      <VStack>
        <Heading as="h2" mb={6} fontSize="2xl" textColor="brand.brandPurple" textTransform="uppercase">And all that hard work has paid off!</Heading>
        <Image src="/awards-stack.svg" alt="awards stack" w="40%"/>
      </VStack>
    </section>
  )
}
