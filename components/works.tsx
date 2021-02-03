import { Box, Flex, Heading, Container, Text, Image, List, ListItem } from "@chakra-ui/react"

// TODO: description の充実
const workList = [
  {
    company: '株式会社リクルートライフスタイル',
    period: '2018/04 - 2021/02',
    role: 'フロントエンドエンジニア / フロントエンドリーダー',
    productList: [
      {
        name: 'Air ウェイト',
        description: '要件定義, 設計, 実装'
      },
      {
        name: 'Air リザーブ',
        description: '設計, 実装'
      }
    ]
  },
  {
    company: 'メディアリンク株式会社',
    period: '2018/01 - 2018/03',
    role: 'Web エンジニア',
    productList: [
      {
        name: 'sinclo',
        description: '設計, 実装'
      }
    ]
  },
  {
    company: '株式会社グローアップソリューションズ',
    period: '2014/10 - 2017/12',
    role: 'バックエンドエンジニア',
    productList: [
      {
        name: '越境 EC サイトの開発、保守',
        description: '設計, 実装'
      },
      {
        name: 'ブラウザ向けソーシャルゲーム開発',
        description: '設計, 実装'
      }
    ]
  },
  {
    company: '三栄ハイテックス株式会社',
    period: '2008/04 - 2012/02',
    role: 'ソフトウェア検証 / 組み込みエンジニア',
    productList: [
      {
        name: 'システム評価検証',
        description: '総合テストの実施'
      },
      {
        name: '組み込みブラウザ向け HTML コンテンツ開発',
        description: '結合試験仕様書の設計と実施, 実装'
      },
      {
        name: 'UI コンテンツ開発',
        description: '単体試験及び結合試験の設計及び実施, 実装'
      },
      {
        name: '組み込みブラウザ開発',
        description: '単体試験及び結合試験の設計, ATS試験の実施'
      },
      {
        name: '第三者検証',
        description: 'システム評価業務, Webサイトテスト, 受け入れテスト'
      }
    ]
  }
]

function Works() {
  return (
    <Box marginBottom="8">
      <Heading size="md" m="4" paddingLeft="2" borderLeft="4px solid #589738">Works</Heading>
      <Container m="4" p="4">
        <Box>
          <List spacing={3}>
            {workList.map((info, index) => (
              <ListItem marginBottom="8" key={index}>
                <Flex>
                  <Heading size="sm">{info.company}</Heading>
                  <Text fontSize="sm">（{info.period}）</Text>
                </Flex>
                <Text>{info.role}</Text>
                {info.productList && (
                  <Box marginTop="4" marginLeft="4" p="4" borderWidth="1px" borderColor="silver" borderRadius="4px" backgroundColor="rgba(104, 150, 79, 0.1)">
                    <List>
                      {info.productList.map((service, sIndex) => (
                        <ListItem key={sIndex} marginBottom="4">
                          <Heading size="sm" m="2" borderBottom="1px dashed rgba(104, 150, 79, 0.5)">{service.name}</Heading>
                          <Text fontSize="sm" marginLeft="2">{service.description}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  )
}
export default Works