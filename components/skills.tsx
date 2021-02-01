import { Box, Heading, Container, Text } from "@chakra-ui/react"
import { Radar } from '@reactchartjs/react-chart.js'

const frontendData = {
  labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'jQuery', 'Jest'],
  datasets: [
    {
      label: 'Front-End',
      data: [3, 4, 4, 4, 3, 3],
      backgroundColor: 'rgba(255, 208, 127, 0.5)',
      borderColor: '#ffa500',
      borderWidth: 1,
    },
  ],
}

const backendData = {
  labels: ['PHP', 'SQL', 'Node.js', 'Perl', 'Shellscript'],
  datasets: [
    {
      label: 'Back-End',
      data: [3, 3, 4, 2, 2],
      backgroundColor: 'rgba(104, 150, 79, 0.5)',
      borderColor: '#589738',
      borderWidth: 1,
    },
  ],
}


const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
}

function Skills() {
  return (
    <Box marginBottom="8">
      <Heading size="md" m="4" paddingLeft="2" borderLeft="4px solid #589738">Skills</Heading>
      <Container m="4">
        <Box>
          <Heading size="sm">Front-End</Heading>
          <Text fontSize="sm">JavaScript / TypeScript / React(Hooks) / Redux / Styled Components / Webpack / Jest / HTML / CSS(Sass) / jQuery / Knockout.js</Text>
          <Text fontSize="sm">フロントエンドエンジニアとして経験3年。直近では React + Redux + TypeScript を使用。</Text>
          <Radar type="rader" data={frontendData} options={options} />
        </Box>
        <Box marginTop="8">
          <Heading size="sm">Back-End</Heading>
          <Text fontSize="sm">PHP(Symfony, FuelPHP, CakePHP) / SQL / Node.js / Perl</Text>
          <Text fontSize="sm">バックエンドエンジニアとして経験3年。</Text>
          <Radar type="rader" data={backendData} options={options} />
        </Box>
        <Box marginTop="8" borderWidth="1px" borderColor="silver" borderRadius="4px">
          <Text m="2" fontSize="sm">
            1 ... 未経験<br />
            2 ... 他者の協力を得ながら開発ができる<br />
            3 ... 1人で開発を進められる<br />
            4 ... 他者に教えることができる<br />
            5 ... コミッター・開発者レベル
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
export default Skills