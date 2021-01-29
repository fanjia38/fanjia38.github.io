import Head from 'next/head'
import { Center, Heading, Text } from "@chakra-ui/react"
import Profile from '../components/profile'
import Skills from '../components/skills'
import Works from '../components/works'

function Index() {
  return (
    <>
      <Head>
        <title>fanjia38.github.io</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <Center>
        <Heading m="8">fanjia38.github.io</Heading>
      </Center>
      <Profile />
      <Skills/>
      <Works />
      <Center borderTop="3px double #589738" marginTop="100px">
        <Text p="4" fontSize="sm">Copyright (c) 2017-2021 fanjia38</Text>
      </Center>
    </>
  )
}
export default Index