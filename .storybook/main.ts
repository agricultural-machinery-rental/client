import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // webpackFinal: async config => {
  //   if (config.resolve) {
  //     config.resolve.alias = {
  //       '@': path.resolve(__dirname, '../src'),
  //     };
  //   }
  //
  //   return config;
  // },

  // @ts-ignore
  webpackFinal: async config => {
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;
    // @ts-ignore
    config.module.rules.push({
      test: /\.svg$/i,
      enforce: 'pre',
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      include: path.resolve(__dirname, '../src'),
    });
    // @ts-ignore
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
export default config;
