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
  labels: ['Node.js', 'PHP', 'Symfony', 'FuelPHP', 'SQL'],
  datasets: [
    {
      label: 'Back-End',
      data: [4, 3, 3, 3, 3],
      backgroundColor: 'rgba(104, 150, 79, 0.5)',
      borderColor: '#589738',
      borderWidth: 1,
    },
  ],
}


const options = {
  scale: {
    ticks: {
      beginAtZero: true,
      max: 5,
      min: 0,
      stepSize: 1
    },
  },
}

function Skills() {
  return (
    <Box marginBottom="8">
      <Heading size="lg" m="4" paddingLeft="2" borderLeft="4px solid #589738">Skills</Heading>
      <Container m="4">
        <Box>
          <Heading size="md" marginBottom="2">Front-End</Heading>
          <Text>フロントエンドエンジニアとして経験3年。直近では React + Redux + TypeScript を使用。</Text>
          <Text fontSize="sm" marginBottom="4">JavaScript / TypeScript / React(Hooks) / Redux / Styled Components / Webpack / Jest / HTML / CSS(Sass) / jQuery / Knockout.js</Text>
          <Radar type="rader" data={frontendData} options={options} />
        </Box>
        <Box marginTop="8">
          <Heading size="md" marginBottom="2">Back-End</Heading>
          <Text>バックエンドエンジニアとして経験3年。</Text>
          <Text fontSize="sm" marginBottom="4">Node.js / PHP(Symfony, FuelPHP, CakePHP) / SQL / Perl</Text>
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