import { Global } from '@mantine/core'

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': { boxSizing: 'border-box' },
        body: {
          ...theme.fn.fontStyles(),
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeight,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[4]
              : theme.colors.dark[5],
        },
      })}
    />
  )
}
