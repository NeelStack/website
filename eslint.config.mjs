import nextConfig from 'eslint-config-next'

const eslintConfig = [
  {
    ignores: ['.next/**/*', 'node_modules/**/*'],
  },
  ...nextConfig,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default eslintConfig
