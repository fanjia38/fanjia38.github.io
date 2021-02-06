import { Box, Heading, Container, Text, Image, List, ListItem } from "@chakra-ui/react"

// TODO: description の充実
const workList = [
  {
    company: '株式会社リクルートライフスタイル',
    period: '2018/04 - 2021/02',
    role: 'フロントエンドエンジニア / フロントエンドリーダー',
    productList: [
      {
        name: '受付・順番待ち管理システム開発',
        description: '新規機能の設計及び実装を行いました。前任からフロントエンドリーダーを引き継ぎ、1年がかりの大規模プロジェクトの要件定義から携わり、影響範囲を調査しながらバックエンド等の他チームと連携した全体設計や画面設計書の作成、開発スケジュールの作成と管理を行いました。'
      },
      {
        name: '予約システム開発',
        description: '新規機能の設計及び実装、印刷用ページの対応、不具合改修など、 CI のメンテナンスや E2E テストの保守を行いました。'
      }
    ]
  },
  {
    company: 'メディアリンク株式会社',
    period: '2018/01 - 2018/03',
    role: 'Web エンジニア',
    productList: [
      {
        name: 'チャットボットツール開発',
        description: '新規機能の管理画面の設計及び実装と、プレビュー画面の実装を行いました。'
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
        description: '機能追加や不具合改修、Angular.js や Node.js を用いた新規案件の設計及び実装、運用保守に携わりました。'
      },
      {
        name: 'ブラウザ向けソーシャルゲーム開発',
        description: 'ソーシャルゲームの機能追加や新規開発、ヘルプページの設計及び実装、管理画面の改修を行いました。'
      }
    ]
  },
  {
    company: '三栄ハイテックス株式会社',
    period: '2008/04 - 2012/02',
    role: 'ソフトウェア検証 / 組み込みエンジニア',
    productList: [
      {
        name: '組み込みブラウザ向け HTML コンテンツ開発',
        description: 'HTML/JavaScript による実装と、結合試験仕様書の設計及び実施を行いました。'
      },
      {
        name: 'UI コンテンツ開発',
        description: 'STB 向けの UI コンテンツ実装と、単体試験及び結合試験の設計及び実施を行いました。'
      },
      {
        name: '組み込みブラウザ開発',
        description: '複合機に搭載した組み込みブラウザへの、単体試験及び結合試験の設計や ATS 試験の実施を行いました。'
      },
      {
        name: 'システム評価検証',
        description: 'システム評価業務に携わり、Webサイトテストや受け入れテストの実施を行いました。'
      }
    ]
  }
]

function Works() {
  return (
    <Box marginBottom="8">
      <Heading size="lg" m="4" paddingLeft="2" borderLeft="4px solid #589738">Works</Heading>
      <Container m="4" p="4">
        <Box>
          <List spacing={3}>
            {workList.map((info, index) => (
              <ListItem marginBottom="8" key={index}>
                <Box marginBottom="2">
                  <Heading size="md" display="inline-block">{info.company}</Heading>
                  <Text fontSize="sm" display="inline-block">（{info.period}）</Text>
                </Box>
                <Text>{info.role}</Text>
                {info.productList && (
                  <Box marginTop="4" marginLeft="4" p="4" borderWidth="1px" borderColor="rgba(104, 150, 79, 0.5)" borderRadius="4px" backgroundColor="rgba(104, 150, 79, 0.1)">
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