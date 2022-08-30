import { BackgroundImage, Box, Center, useMantineTheme } from '@mantine/core'
import { NextPage } from 'next'
import { MAIN_HEIGHT } from '../constants/styles.constants'
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
            height: MAIN_HEIGHT,
            borderRadius: theme.radius.md,
            overflow: 'hidden',
            border: `1px solid ${
              isDark ? theme.colors.dark[4] : theme.colors.dark[0]
            }`,
            backgroundColor: isDark
              ? theme.fn.rgba(theme.colors.dark[5], 0.89)
              : theme.colors.gray[0],
          }}
        >
          <Header />
          <Main>
            <SideBarWrapper />
            {children}
          </Main>
          <Footer />
        </Box>
      </Center>
    </BackgroundImage>
  )
}

export default Layout
