/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mariaariasinsurance.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};
