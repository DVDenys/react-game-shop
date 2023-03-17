const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@containers': 'src/containers',
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@Pages': 'src/Pages',
        '@routes': 'src/routes',
        '@constants': 'src/constants',
        '@static': 'src/static',
        '@store': 'src/store',
        '@utils': 'src/utils/utils',
    })(config);

    return config;
  }