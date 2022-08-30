import {
  Box,
  Container,
  Group,
  List,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useSidebarContext } from '../context/SidebarContext'
import useIsDark from '../hooks/useIsDark'
import { IMetaData } from '../types/types'
import Code from './template/Code'
import useStyles from '../components/template/Components.styles'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  metaData: IMetaData
}
const components = {
  code: Code,
}
export default function MDX({ source, metaData }: MDXProps) {
  const isDark = useIsDark()
  const { toggleSideBar, saveSubSideBarLabel } = useSidebarContext()
  const onTagClick = (tagName: string) => {
    toggleSideBar(true)
    saveSubSideBarLabel({ type: 'tag', title: tagName })
  }
  const theme = useMantineTheme()

  const { classes, cx } = useStyles()

  return (
    <Container
      py={20}
      mx='auto'
      fluid
      sx={{
        width: theme.breakpoints.sm,
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: theme.breakpoints.xs - 100,
        },
        [`@media (max-width: 380px)`]: {
          width: 380,
        },
        overflowX: 'hidden',
        whiteSpace: 'normal',
      }}
    >
      <Group
        spacing={15}
        p={10}
        sx={{
          borderRadius: theme.radius.md,
          width: '100%',
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            width: theme.breakpoints.xs - 100,
          },
          [`@media (max-width: 380px)`]: {
            width: 350,
          },

          flexDirection: 'column',
          alignItems: 'center',
          height: 150,
          backgroundColor: isDark ? theme.colors.dark[3] : theme.colors.gray[3],
          overflow: 'hidden',
        }}
      >
        <Title>{metaData?.title}</Title>
        <Group>
          <Text>Geony</Text>
          <Text sx={{ fontSize: theme.fontSizes.sm }}>
            {metaData?.createdAt}
          </Text>
        </Group>
        <Group spacing={10} sx={{ display: 'flex' }}>
          {metaData?.tags?.map((tagName, i) => (
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
      </Box>
    </Container>
  )
}
