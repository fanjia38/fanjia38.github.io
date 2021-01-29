import { Box, Heading, Container, Text, Link } from "@chakra-ui/react"

function Profile() {
  return (
    <Box marginBottom="8">
      <Heading size="md" m="4" paddingLeft="2" borderLeft="4px solid #589738">Profile</Heading>
      <Container m="4">
        <Text fontSize="sm">Sayaka Iida</Text>
        <Text fontSize="sm">Front-End Engineer</Text>
        <Text fontSize="sm">
          <Link href="https://github.com/fanjia38/" isExternal>GitHub</Link>
        </Text>
      </Container>
    </Box>
  )
}
export default Profile