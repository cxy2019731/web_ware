const config = {
  development: {
    http: {},
  },
  production: {
    http: {},
  },
};

export default config[utils.getEnv()];
