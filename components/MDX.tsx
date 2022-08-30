import {
  Box,
  Container,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useSidebarContext } from '../context/SidebarContext'
import useIsDark from '../hooks/useIsDark'
import { IMetaData, ITag } from '../types/types'
import Code from './template/Code'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  metaData: IMetaData
}

const components = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  div: Div,
  p: P,
  a: A,
  ul: Ul,
  li: Li,
  img: Image,
  strong: Strong,
  hr: Hr,
  blockquote: Blockquote,
}

export default function MDX({ source, metaData }: MDXProps) {
  const isDark = useIsDark()
  const { toggleSideBar, saveSubSideBarLabel } = useSidebarContext()
  const onTagClick = (tagName: string) => {
    toggleSideBar(true)
    saveSubSideBarLabel({ type: 'tag', title: tagName })
  }
  const theme = useMantineTheme()
  return (
    <Group
      p={20}
      mx='auto'
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: theme.breakpoints.sm,
        whiteSpace: 'normal',
      }}
    >
      <Group
        spacing={15}
        p={10}
        sx={{
          borderRadius: theme.radius.md,
          width: '100%',
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
              <span>{tagName}</span>
            </Box>
          ))}
        </Group>
      </Group>
      <MDXRemote {...source} components={components} />
    </Group>
  )
}
