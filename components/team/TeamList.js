import { Flex, Box, Divider, Grid, GridItem, Heading, Image, Link, Text, HStack, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

import { team } from '../../data/team'
import TeamCard from './TeamCard';

export default function TeamList() {

  return (
    <section>
      <Box textAlign="center" py={10}>
        <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange"> Meet Your Super Agents!</Heading>
        <Text fontSize="md" fontWeight="bold">We have a full team of office staff and realtors ready to help you</Text>
      </Box>
      <Divider />
      <Box mt={16} />
      <Grid templateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={8} justifyItems="center">
        {team.map(member => (
          <TeamCard key={member.id} imgUrl={member.imgUrl} hoverImgUrl={member.hoverImgUrl} name={member.name} title={member.title} phone={member.phone} email={member.email} />
        ))}
      </Grid>
    </section>
  )
}

