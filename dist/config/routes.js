'use strict';

module.exports.routes = {
  'post /register': {
    controller: 'UserController',
    action: 'create',
    skipAssets: true
  },

  'post /logout': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'logout'
  },

  'post /auth/local': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  },

  'post /auth/local/:action': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  },

  'post /auth/:provider': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  },

  'post /auth/:provider/:action': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  },

  'get /auth/:provider': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'provider'
  },

  'get /auth/:provider/callback': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  },
  'get /auth/:provider/:action': {
    controller: 'AuthController',
    skipAssets: true,
    action: 'callback'
  }
};