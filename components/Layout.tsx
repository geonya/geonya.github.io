import { BackgroundImage, Box, Center, useMantineTheme } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { NextPage } from 'next'
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
            borderRadius: theme.radius.md,
            border: `1px solid ${
              isDark ? theme.colors.dark[4] : theme.colors.dark[0]
            }`,
            backgroundColor: isDark
              ? theme.fn.rgba(theme.colors.dark[5], 0.89)
              : theme.colors.gray[0],
            position: 'relative',
          }}
        >
          <Header />
          <SideBarWrapper height={height} />
          <main ref={ref}>
            <Main>{children}</Main>
          </main>
          <Footer />
        </Box>
      </Center>
    </BackgroundImage>
  )
}

export default Layout
