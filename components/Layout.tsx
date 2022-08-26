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
            height: 800,
            minHeight: 800,
            borderRadius: theme.radius.md,
            overflow: 'hidden',
            borderWidth: theme.other.borderWidth,
            borderColor: theme.other.borderColor,
          }}
        >
          <Box
            sx={{
              height: 50,
              display: 'flex',
              alignItems: 'center',
              borderBottomWidth: theme.other.borderWidth,
              borderBottomColor: theme.other.borderColor,
              backgroundColor: isDark
                ? theme.colors.dark[6]
                : theme.colors.dark[0],
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
                <Box component={NextLink} href={'/'} sx={{ cursor: 'pointer' }}>
                  <Text>Geony Devnotes</Text>
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
              position: 'relative',
              backgroundColor: isDark
                ? theme.colors.dark[6]
                : theme.colors.dark[0],
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
                    width: 150,
                    height: '100%',
                  }}
                  maxWidth={300}
                  minWidth={100}
                  minHeight={'100%'}
                  maxHeight={'100%'}
                >
                  <SideBar />
                </Resizable>
                {subSideBarLabel && (
                  <Resizable
                    defaultSize={{
                      width: 150,
                      height: '100%',
                    }}
                    maxWidth={300}
                    minWidth={100}
                    minHeight={'100%'}
                    maxHeight={'100%'}
                  >
                    <SubSideBar />
                  </Resizable>
                )}
              </Box>
            )}

            <Box>{children}</Box>
          </ScrollArea>
          <Box
            sx={{
              height: 30,
              borderTopWidth: theme.other.borderWidth,
              borderTopColor: theme.other.borderColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: theme.fontSizes.sm,
              backgroundColor: isDark
                ? theme.colors.dark[6]
                : theme.colors.dark[0],
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
