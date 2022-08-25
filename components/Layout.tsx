import {
  AppShell,
  Aside,
  BackgroundImage,
  Box,
  Burger,
  Card,
  Center,
  Grid,
  MediaQuery,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery, useViewportSize } from '@mantine/hooks'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSidebarContext } from '../context/SidebarContext'
import metaData from '../data/metaData'
import Clock from './Clock'
import Search from './Search'
import Section from './Section'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const { toggleSideBar, sideBarShowing, subSideBarLabel } = useSidebarContext()
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const borderWidth = '1px'
  const borderColor =
    theme.colorScheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
  const dark = theme.colorScheme === 'dark'
  return (
    <BackgroundImage src={'/images/base-background-img.jpeg'}>
      <Center sx={{ width: '100vw', height: '100vh' }}>
        <Section
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
              width: theme.breakpoints.lg,
            },
            [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
              width: theme.breakpoints.xl,
            },
            height: 800,
            borderRadius: theme.radius.md,
            overflow: 'hidden',
            borderWidth,
            borderColor,
          })}
        >
          <Section
            sx={{
              height: 50,
              display: 'flex',
              alignItems: 'center',
              borderBottomWidth: borderWidth,
              borderBottomColor: borderColor,
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
          </Section>
          <ScrollArea
            scrollbarSize={6}
            scrollHideDelay={1000}
            sx={(theme) => ({
              height: 700,
              display: 'flex',
              position: 'relative',
            })}
          >
            {sideBarShowing && (
              <Section
                sx={{
                  position: 'absolute',
                  width: 150,
                  height: 700,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(3px)',
                }}
              >
                <Section
                  sx={{
                    zIndex: 3,
                    background: 'none',
                  }}
                >
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.gray[3],
                    })}
                  >
                    NavBar
                  </Text>
                </Section>
              </Section>
            )}
            {sideBarShowing && true && (
              <Section
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 150,
                  width: 150,
                  height: 700,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(3px)',
                }}
              >
                <Section
                  sx={{
                    zIndex: 3,
                    background: 'none',
                  }}
                >
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.gray[3],
                    })}
                  >
                    NavBar
                  </Text>
                </Section>
              </Section>
            )}

            <Section>{children}</Section>
          </ScrollArea>

          <Section
            sx={{
              height: 50,
              borderTopWidth: borderWidth,
              borderTopColor: borderColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Footer
          </Section>
        </Section>
      </Center>
    </BackgroundImage>
  )
}

export default Layout
