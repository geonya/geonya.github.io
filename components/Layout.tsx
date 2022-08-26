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
  NavLink,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery, useViewportSize } from '@mantine/hooks'
import { IconGauge } from '@tabler/icons'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSidebarContext } from '../context/SidebarContext'
import metaData from '../data/metaData'
import { Resizable } from '../lib/re-resizable'
import Clock from './Clock'
import Search from './Search'
import Section from './Section'

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

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0',
  }
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
              position: 'relative',
            })}
          >
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
                style={{ backgroundColor: 'red' }}
                defaultSize={{
                  width: 300,
                  height: 700,
                }}
                maxWidth={600}
                minWidth={1}
                minHeight={700}
                maxHeight={700}
              >
                001
              </Resizable>
              <Resizable
                style={{ backgroundColor: 'blue' }}
                defaultSize={{
                  width: 300,
                  height: 700,
                }}
                maxWidth={600}
                minWidth={1}
                minHeight={700}
                maxHeight={700}
              >
                002
              </Resizable>
            </Box>

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
