import {
  Box,
  Burger,
  Center,
  Grid,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { useSidebarContext } from '../context/SidebarContext'
import Clock from './Clock'
import Search from './Search'
import ThemeModeToggle from './ThemeModeToggle'
import metaData from '../data/metaData'
import useIsDark from '../hooks/useIsDark'

export default function Header() {
  const { toggleSideBar, sideBarShowing } = useSidebarContext()
  const theme = useMantineTheme()
  const isDark = useIsDark()
  return (
    <Center
      sx={{
        height: 50,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.dark[0]
        }`,
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: isDark ? theme.colors.dark[5] : theme.colors.gray[0],
          zIndex: 888,
        },
      }}
      px={5}
    >
      <Grid
        justify='space-between'
        align='center'
        sx={{
          width: '100%',
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: theme.fontSizes.sm,
          },
        }}
        px={10}
      >
        <Grid.Col span={1}>
          <Box>
            <Burger
              opened={sideBarShowing}
              onClick={() => toggleSideBar()}
              size='sm'
              color={theme.colors.gray[6]}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text
            component={NextLink}
            href={'/'}
            sx={{
              cursor: 'pointer',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              fontSize: theme.fontSizes.md,
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize: theme.fontSizes.sm,
              },
            }}
            onClick={() => toggleSideBar(false)}
          >
            {metaData.title}
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Search />
        </Grid.Col>
        <Grid.Col span={1}>
          <ThemeModeToggle />
        </Grid.Col>
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Grid.Col span={2}>
            <Text sx={{ fontSize: theme.fontSizes.sm, textAlign: 'center' }}>
              <Clock />
            </Text>
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </Center>
  )
}
