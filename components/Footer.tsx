import {
  Box,
  Grid,
  Group,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useRouter } from 'next/router'
import useIsDark from '../hooks/useIsDark'
import MyIconAboutMe from './icons/MyIconAboutMe'
import MyIconGithub from './icons/MyIconGithub'
import MyIconInstagram from './icons/MyIconInstagram'

export default function Footer() {
  const theme = useMantineTheme()
  const isDark = useIsDark()
  const router = useRouter()
  return (
    <Box
      sx={{
        height: 30,
        fontSize: theme.fontSizes.sm,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 888,
        backgroundColor: isDark
          ? theme.fn.rgba(theme.colors.dark[5], 1)
          : theme.colors.gray[3],
      }}
    >
      <Grid
        px={50}
        m={0}
        sx={{
          height: '100%',
          placeContent: 'center',
        }}
      >
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Grid.Col span={4}></Grid.Col>
        </MediaQuery>
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Grid.Col span={4}>
            <Group position='center' sx={{ height: '100%' }}>
              <Text>path: {(router.asPath as string) || ''}</Text>
            </Group>
          </Grid.Col>
        </MediaQuery>
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Grid.Col span={4}>
            <Group position='right' sx={{ height: '100%' }}>
              <MyIconAboutMe size={18} />
              <MyIconGithub size={18} />
              <MyIconInstagram size={18} />
            </Group>
          </Grid.Col>
        </MediaQuery>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Grid.Col span={12}>
            <Group position='center' spacing={30} sx={{ height: '100%' }}>
              <MyIconAboutMe size={18} />
              <MyIconGithub size={18} />
              <MyIconInstagram size={18} />
            </Group>
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </Box>
  )
}
