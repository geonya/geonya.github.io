import { createStyles } from '@mantine/core'
import { PropsType } from '../../types/types'

const useStyles = createStyles((theme) => ({
  blockquote: {
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    margin: `${theme.spacing.md}px 0`,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '& cite': {
      display: 'block',
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
}))

const BlockQuote = (props: PropsType) => {
  const { classes } = useStyles()
  return (
    <blockquote className={classes.blockquote}>{props.children}</blockquote>
  )
}
export default BlockQuote
