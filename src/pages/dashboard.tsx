import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
  const options: ApexOptions = {
    chart: {
      id: 'basic-bar',
      // mostra/esconde a toolbar
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      // define cor dos marcadores X e Y
      foreColor: theme.colors.gray[500],
    },
    // mostra/esconde a grid
    grid: {
      show: false,
    },
    // desabilita o label das curvas
    dataLabels: {
      enabled: false,
    },
    // desabilita o tooltip
    tooltip: {
      enabled: false,
    },
    // define como os dados serão exibidos
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2020-03-18T00:00:00.000Z',
        '2020-03-19T00:00:00.000Z',
        '2020-03-20T00:00:00.000Z',
        '2020-03-21T00:00:00.000Z',
        '2020-03-22T00:00:00.000Z',
        '2020-03-23T00:00:00.000Z',
        '2020-03-24T00:00:00.000Z',
      ],
    },
    // define os opções de cores do contorno
    stroke: {
      width: [3],
      colors: [theme.colors.blue[500]],
    },
    // define os opções de cores de preenchimento
    fill: {
      colors: [theme.colors.pink[500]],
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.5,
      },
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 91, 45, 50, 10, 60, 70],
    },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" max-width={1480} px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mg="4">
              Inscritos da Semana
            </Text>

            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mg="4">
              Taxa de Abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
