import { Box, Group, Text, Title, useMantineTheme } from '@mantine/core'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useSidebarContext } from '../context/SidebarContext'
import useIsDark from '../hooks/useIsDark'
import { IFrontData } from '../types/types'
import Code from './template/Code'
import useStyles from '../components/template/Components.styles'
import { useViewportSize } from '@mantine/hooks'
import Giscus from './giscus/Giscus'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontData: IFrontData
}
const components = {
  code: Code,
}
export default function MDX({ source, frontData }: MDXProps) {
  const isDark = useIsDark()
  const { toggleSideBar, saveSubSideBarLabel } = useSidebarContext()
  const onTagClick = (tagName: string) => {
    toggleSideBar(true)
    saveSubSideBarLabel({ type: 'tag', title: tagName })
  }
  const theme = useMantineTheme()

  const { classes, cx } = useStyles()
  const { width } = useViewportSize()
  return (
    <Box
      px={20}
      py={80}
      mx='auto'
      sx={{
        overflowX: 'hidden',
        height: '100%',
        width: theme.breakpoints.xs,
        whiteSpace: 'normal',
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: width || 380,
        },
      }}
    >
      <Group
        spacing={15}
        p={10}
        sx={{
          borderRadius: theme.radius.md,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          backgroundColor: isDark
            ? theme.fn.rgba(theme.colors.dark[6], 0.7)
            : theme.colors.gray[3],
        }}
      >
        <Title
          sx={{
            fontSize: theme.fontSizes.lg,
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              fontSize: theme.fontSizes.md,
            },
          }}
        >
          {frontData?.title}
        </Title>
        <Group
          sx={{
            fontSize: theme.fontSizes.sm,
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              fontSize: theme.fontSizes.xs,
            },
          }}
        >
          <Text>Geony</Text>
          <Text>{frontData?.createdAt}</Text>
        </Group>
        <Group
          spacing={10}
          sx={{
            display: 'flex',
            fontSize: theme.fontSizes.sm,
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              fontSize: theme.fontSizes.xs,
            },
          }}
        >
          {frontData?.tags?.map((tagName, i) => (
            <Box
              key={i}
              onClick={() => onTagClick(tagName)}
              py={2}
              px={9}
              sx={{
                cursor: 'pointer',
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2],
                borderRadius: theme.radius.xl,
                fontSize: theme.fontSizes.xs,
                '&:hover': {
                  opacity: 0.5,
                },
              }}
            >
              <Text>{tagName}</Text>
            </Box>
          ))}
        </Group>
      </Group>
      <Box className={cx(classes.root)}>
        <MDXRemote {...source} components={components} lazy />
        <Giscus
          repo='geonya/geonya.github.io'
          repoId='R_kgDOH3yhMQ'
          category='General'
          categoryId='DIC_kwDOH3yhMc4CRT6o'
          mapping='pathname'
          strict='0'
          reactionsEnabled='1'
          emitMetadata='0'
          inputPosition='top'
          theme={theme.colorScheme}
          lang='en'
          loading='eager'
        />
      </Box>
    </Box>
  )
}
