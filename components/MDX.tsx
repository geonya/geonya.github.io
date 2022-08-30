import { Box, Group, List, Text, Title, useMantineTheme } from '@mantine/core'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useSidebarContext } from '../context/SidebarContext'
import useIsDark from '../hooks/useIsDark'
import { IMetaData, ITag, PropsType } from '../types/types'
import BlockQuote from './template/Blockquote'
import Code from './template/Code'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  metaData: IMetaData
}
const components = {
  code: Code,
  h1: ({ children }: PropsType) => (
    <Title order={1} mb={20}>
      {children}
    </Title>
  ),
  h2: ({ children }: PropsType) => (
    <Title order={2} mb={20}>
      {children}
    </Title>
  ),
  h3: ({ children }: PropsType) => (
    <Title order={3} mb={20}>
      {children}
    </Title>
  ),
  h4: ({ children }: PropsType) => (
    <Title order={4} mb={20}>
      {children}
    </Title>
  ),
  div: ({ children }: PropsType) => <Box mb={20}>{children}</Box>,
  p: ({ children }: PropsType) => <Text mb={20}>{children}</Text>,
  ul: ({ children }: PropsType) => (
    <List listStyleType='disc' mb={20}>
      {children}
    </List>
  ),
  ol: ({ children }: PropsType) => (
    <List listStyleType='number' mb={20}>
      {children}
    </List>
  ),
  li: ({ children }: PropsType) => <List.Item mb={5}>{children}</List.Item>,
  strong: ({ children }: PropsType) => (
    <Text weight={600} mb={20}>
      {children}
    </Text>
  ),
  blockquote: BlockQuote,
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
        width: theme.breakpoints.sm,
        [`@media (max-width: 500px)`]: {
          width: 450,
        },
        whiteSpace: 'normal',
      }}
    >
      <Group
        spacing={15}
        p={10}
        mx='auto'
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
              <Text>{tagName}</Text>
            </Box>
          ))}
        </Group>
      </Group>
      <Box sx={{ width: '100%' }}>
        <MDXRemote {...source} components={components} lazy />
      </Box>
    </Group>
  )
}
