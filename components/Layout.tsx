import { BackgroundImage, Container, useMantineTheme } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useSidebarContext } from '../context/SidebarContext'
import useIsDark from '../hooks/useIsDark'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import SideBarWrapper from './SideBarWrapper'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const theme = useMantineTheme()
  const isDark = useIsDark()
  const { ref, height } = useElementSize()
  const { saveSideBarHeight } = useSidebarContext()

  useEffect(() => {
    saveSideBarHeight(height)
  }, [height, saveSideBarHeight])

  return (
    <BackgroundImage src={'/images/base-background-img.jpeg'}>
      <Container
        ref={ref}
        fluid
        p={0}
        sx={{
          height: '100vh',
          [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            width: theme.breakpoints.xl,
            borderRadius: theme.radius.md,
          },
          [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            width: theme.breakpoints.xl,
            borderRadius: theme.radius.md,
          },
          [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            width: theme.breakpoints.lg,
          },
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: theme.breakpoints.md,
          },
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: theme.breakpoints.sm,
          },

          overflow: 'hidden',
          backgroundColor: isDark
            ? theme.fn.rgba(theme.colors.dark[5], 0.6)
            : theme.colors.gray[0],
          position: 'relative',
        }}
      >
        <Header />
        <SideBarWrapper />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </BackgroundImage>
  )
}

export default Layout
