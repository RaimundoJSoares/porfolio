module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,POST' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-PINGOTHER, Content-Type',
          },
        ],
      },
    ]
  },

  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
