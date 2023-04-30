/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/welcome',
        destination: '/welcome/company',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
