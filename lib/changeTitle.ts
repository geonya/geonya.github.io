export const slugToTitle = (slug: string) =>
  slug.replace('-', ' ').replace('.mdx', '')
export const titleToSlug = (title: string) => title.replace(' ', '-')
