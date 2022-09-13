import {
  Box,
  Burger,
  Center,
  Grid,
  Group,
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
import { SpotlightProvider } from '@mantine/spotlight'
import MyIconAboutMe from './icons/MyIconAboutMe'
import MyIconGithub from './icons/MyIconGithub'
import MyIconInstagram from './icons/MyIconInstagram'

export default function Header() {
  const { toggleSideBar, sideBarShowing } = useSidebarContext()
  const theme = useMantineTheme()
  const isDark = useIsDark()
  return (
    <Center
      sx={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 888,
        height: 50,
        backgroundColor: isDark
          ? theme.fn.rgba(theme.colors.dark[5], 1)
          : theme.colors.gray[3],
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
          <Group>
            <Text
              mr={20}
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
                '&:hover': {
                  opacity: 0.5,
                },
              }}
              onClick={() => toggleSideBar(false)}
            >
              {metaData.title}
            </Text>
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Group>
                <MyIconAboutMe />
                <MyIconGithub />
                <MyIconInstagram />
              </Group>
            </MediaQuery>
          </Group>
        </Grid.Col>
        <Grid.Col span={3}>
          <SpotlightProvider
            nothingFoundMessage='Nothing found...'
            shortcut={['mod + P', 'mod + K', '/']}
            highlightQuery
            styles={{
              spotlight: {
                [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                  width: '80%',
                },
                flexWrap: 'wrap',
              },
            }}
            actions={[]}
            filter={(query, actions) =>
              actions.filter(
                (action) =>
                  action.title.toLowerCase().includes(query.toLowerCase()) ||
                  action.description
                    ?.toLowerCase()
                    .includes(query.toLowerCase()) ||
                  action.content?.toLowerCase().includes(query.toLowerCase()),
              )
            }
          >
            <Search />
          </SpotlightProvider>
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
