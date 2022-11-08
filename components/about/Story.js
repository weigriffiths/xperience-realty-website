import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Story() {
  return (
    <section>
      <VStack spacing={4}>
        <Heading as="h1" fontSize="5xl" textColor="brand.brandOrange">Our Story</Heading>
        <Heading as="h2" fontSize="xl" textColor="brand.brandPurple" textTransform="uppercase">WHY WE STARTED XPERIENCE REALTY</Heading>
        <VStack spacing={4} textAlign="center" w="85%" lineHeight={2}>
          <Text>So what did Brisbane needs saving from? Other agencies that just didn&apos;t care. They all used stale and antiquated marketing. They also just seemed as if they wanted to avoid their clients&apos; needs, and they just made whole process seem so complicated.</Text>
          <Text>‍With all that on the table, we decided to launch Xperience Realty. With this new and awesome agency to fix the gap within the market, we set out with a simple goal: <Text as="span" fontWeight="bold">make real estate as enjoyable as it is profitable</Text>. We wanted to provide a much better customer Xperience based on better relationships with our clients extended family. The fuel for all of this is just a passion for property. We also wanted to create and maintain a fun work environment; so we took a page out of the books of inspiring companies such as Google, Virgin and even Pixar which believe in doing better business by focusing on a fun and family-oriented workplace culture.</Text>
          <Text>The result? Just have a look at this website! Have a looking at our property videos and even our social media. It’s engaging, it’s a fun, and it’s all made with love. Because of our innovative (and quirky) marketing, we’ve sold so many properties and gained an impressive amount of managements.</Text>
          <Text>Being the one-stop shop was also a key motivator. We did this by making our way into certain markets that few (if any) agencies dare to tread, such as Airbnb management, and even mortgage broking (which is honestly a no-brainer). Team Xperience also vowed to never be the typical “up themselves” agents, but instead being the Real Estate Superheroes that are badass yet approachable.</Text>
        </VStack>
      </VStack>
    </section>
  )
}
