import { Box, Heading, Container, Text, Link } from "@chakra-ui/react"

function Profile() {
  return (
    <Box marginBottom="8">
      <Heading size="lg" m="4" paddingLeft="2" borderLeft="4px solid #589738">Profile</Heading>
      <Container m="4">
        <Text>S.Iida</Text>
        <Text>Web エンジニア。高等学校及び専門学校で情報処理を学び、組み込みエンジニアを経て現在はフリーランスのフロントエンドエンジニアとして働いています。</Text>
        <Text>
          <Link href="https://github.com/fanjia38/" isExternal>GitHub</Link>
        </Text>
      </Container>
    </Box>
  )
}
export default Profile