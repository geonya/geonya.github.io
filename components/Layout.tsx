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

import { NextPage } from 'next'
import { useSidebarContext } from '../context/SidebarContext'
import { Resizable } from '../lib/re-resizable'
import Clock from './Clock'
import SideBar from './SideBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
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
                <Box>
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
                <Box>
                  <Text>Search</Text>
                </Box>
              </Grid.Col>
              <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Grid.Col
                  span={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box>
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
                  style={{
                    backgroundColor: 'rgba(56,56,56,0.6)',
                    backdropFilter: 'blur(4px)',
                  }}
                  defaultSize={{
                    width: 150,
                    height: 700,
                  }}
                  maxWidth={300}
                  minWidth={100}
                  minHeight={700}
                  maxHeight={700}
                >
                  <SideBar />
                </Resizable>
                {true && (
                  <Resizable
                    style={{
                      backgroundColor: 'rgba(56,56,56,0.8)',
                      backdropFilter: 'blur(4px)',
                    }}
                    defaultSize={{
                      width: 150,
                      height: 700,
                    }}
                    maxWidth={300}
                    minWidth={100}
                    minHeight={700}
                    maxHeight={700}
                  >
                    Sub NavBar
                  </Resizable>
                )}
              </Box>
            )}

            <Box>{children}</Box>
          </ScrollArea>
          <Box
            sx={{
              height: 50,
              borderTopWidth: theme.other.borderWidth,
              borderTopColor: theme.other.borderColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDark
                ? theme.colors.dark[6]
                : theme.colors.dark[0],
            }}
          >
            Footer
          </Box>
        </Box>
      </Center>
    </BackgroundImage>
  )
}

export default Layout
