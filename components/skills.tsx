import { Box, Heading, Container, Text } from "@chakra-ui/react"
import { Radar } from '@reactchartjs/react-chart.js'

const frontendData = {
  labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'jQuery', 'Jest'],
  datasets: [
    {
      label: 'Front-End',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 208, 127, 0.5)',
      borderColor: '#ffa500',
      borderWidth: 1,
    },
  ],
}

const backendData = {
  labels: ['PHP', 'Symfony', 'FuelPHP', 'SQL', 'Node.js', 'Perl'],
  datasets: [
    {
      label: 'Front-End',
      data: [2, 9, 3, 5, 2, 2],
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
          <Text fontSize="sm">JavaScript / TypeScript / React / Redux / Next.js / Styled Components / Webpack / Jest / HTML / CSS(Sass) / jQuery / Knockout.js</Text>
          <Text fontSize="sm">フロントエンドエンジニアとして経験3年。直近では React + Redux + TypeScript を使用。</Text>
          <Radar type="rader" data={frontendData} options={options} />
        </Box>
        <Box marginTop="8">
          <Heading size="sm">Back-End</Heading>
          <Text fontSize="sm">PHP(Symfony, FuelPHP, CakePHP) / SQL / Node.js / Perl</Text>
          <Text fontSize="sm">バックエンドエンジニアとして経験3年。</Text>
          <Radar type="rader" data={backendData} options={options} />
        </Box>
      </Container>
    </Box>
  )
}
export default Skills