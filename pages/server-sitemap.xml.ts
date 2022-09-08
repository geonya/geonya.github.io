import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
import getTotalNotes from '../lib/getTotalNotes'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const totalNotes = getTotalNotes()
  const newsSitemaps = totalNotes.map((note) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/notes/${note.slug}`,
    lastmod: new Date().toISOString(),
  }))

  const fields = [...newsSitemaps]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
