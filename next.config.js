const withMDX = require('@next/mdx')

module.exports = (phase, { defalutConfig }) => {
  const plugins = [
    withMDX({
      extension: /\.mdx?$/,
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    }),
  ]
  return plugins.reduce((acc, next) => next(acc), {
    /** @type {import('next').NextConfig} */
    reactStrictMode: true,
    swcMinify: true,
  })
}
