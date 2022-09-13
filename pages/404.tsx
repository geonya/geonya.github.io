import { Box, Text } from '@mantine/core'
import { GetStaticProps } from 'next'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { PageProps } from '../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const totalNotes = getTotalNotes()
  return {
    props: {
      totalNotes,
    },
  }
}

export default function NotFound({ totalNotes }: PageProps) {
  useSaveTotalNotes(totalNotes)
  return (
    <Box mx='auto' sx={{ textAlign: 'center' }} mt={200}>
      <Text sx={{ fontSize: 23, fontWeight: 600 }}>
        404 Error : Page Not Found
      </Text>
    </Box>
  )
}
