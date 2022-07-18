﻿const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
  '/weatherforecast',
  '/weeks',
  '/topics',
];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: 'https://localhost:7053',
    secure: false,
  });

  app.use(appProxy);
};
