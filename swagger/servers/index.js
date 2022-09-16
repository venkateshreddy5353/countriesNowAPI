const devServer = {
  url: 'https://countiesnowapi.meepaisa.com/api/v0.1/countries',
  description: 'dev server',
  port: {
    enum: ['5000', '3000'],
    default: 3000 || process.env.PORT,
  },
};

const prodServer = {
  url: 'https://countiesnowapi.meepaisa.com/api/v0.1/countries',
  description: 'prod server',
};

module.exports = [
  devServer,
  prodServer,
];
