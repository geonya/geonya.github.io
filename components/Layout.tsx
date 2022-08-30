import {
  BackgroundImage,
  Box,
  Burger,
  Center,
  Grid,
  MediaQuery,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { NextLink } from '@mantine/next'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSidebarContext } from '../context/SidebarContext'
import { Resizable } from '../lib/layout-resizable'
import Clock from './Clock'
import Search from './Search'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'
import ThemeModeToggle from './ThemeModeToggle'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const { toggleSideBar, sideBarShowing, subSideBarLabel } = useSidebarContext()
  const theme = useMantineTheme()
  const isDark = theme.colorScheme === 'dark'
  return (
    <BackgroundImage src={'/images/base-background-img.jpeg'}>
      <Center sx={{ width: '100vw', height: '100vh' }}>
        <Box
          sx={{
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
              width: theme.breakpoints.lg,
            },
            [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
              width: theme.breakpoints.xl,
            },
            height: 780,
            minHeight: 780,
            borderRadius: theme.radius.md,
            overflow: 'hidden',
            border: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.dark[0]
            }`,
            backgroundColor: isDark
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          }}
        >
          {/* header */}
          <Box
            sx={{
              height: 50,
              display: 'flex',
              alignItems: 'center',
              borderBottom: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[4]
                  : theme.colors.dark[0]
              }`,
            }}
          >
            <Grid
              grow
              sx={{
                width: '100%',
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  fontSize: theme.fontSizes.sm,
                },
              }}
              px={15}
            >
              <Grid.Col
                span={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Burger
                    opened={sideBarShowing}
                    onClick={() => toggleSideBar()}
                    size='sm'
                    color={theme.colors.gray[6]}
                  />
                </Box>
              </Grid.Col>
              <Grid.Col
                span={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  component={NextLink}
                  href={'/'}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => toggleSideBar(false)}
                >
                  Geony Devnotes
                </Text>
              </Grid.Col>
              <Grid.Col
                span={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Search />
              </Grid.Col>
              <Grid.Col span={1}>
                <ThemeModeToggle />
              </Grid.Col>
              <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Grid.Col
                  span={1}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box sx={{ fontSize: theme.fontSizes.sm }}>
                    <Clock />
                  </Box>
                </Grid.Col>
              </MediaQuery>
            </Grid>
          </Box>

          {/* Main */}
          <ScrollArea
            scrollbarSize={6}
            scrollHideDelay={1000}
            sx={(theme) => ({
              height: 700,
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
            })}
          >
            {sideBarShowing && (
              <Box
                sx={{
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                }}
              >
                <Resizable
                  defaultSize={{
                    width: 160,
                    height: 780,
                  }}
                  maxWidth={300}
                  minWidth={110}
                  minHeight={780}
                  maxHeight={780}
                >
                  <SideBar />
                </Resizable>
                {subSideBarLabel && (
                  <Resizable
                    defaultSize={{
                      width: 160,
                      height: 780,
                    }}
                    maxWidth={300}
                    minWidth={110}
                    minHeight={780}
                    maxHeight={780}
                  >
                    <SubSideBar />
                  </Resizable>
                )}
                <div
                  className='sidebar-background-click-closing'
                  onClick={() => toggleSideBar()}
                  style={{ flex: 1 }}
                />
              </Box>
            )}

            <Box>{children}</Box>
          </ScrollArea>
          <Box
            sx={{
              height: 30,
              borderTop: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[4]
                  : theme.colors.dark[0]
              }`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: theme.fontSizes.sm,
            }}
          >
            path: {(router.asPath as string) || ''}
          </Box>
        </Box>
      </Center>
    </BackgroundImage>
  )
}

export default Layout
