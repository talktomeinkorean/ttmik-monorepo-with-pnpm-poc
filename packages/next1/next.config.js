/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@common/components']);
const withPlugins = require('next-compose-plugins');

const nextConfig  = {
    outputFileTracing: true,
    output: 'export',
}

module.exports = withPlugins([withTM], nextConfig);
