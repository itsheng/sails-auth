let authHook = sails.hooks.auth;

import _ from 'lodash'
import Marlinspike from 'marlinspike'

if (!authHook) {
  class Auth extends Marlinspike {

    constructor(sails) {
      super(sails, module)
    }

    configure() {
      sails.services.passport.loadStrategies()
    }

    initialize(cb) {

      sails.on('hook:orm:loaded', function() {
        // Finish initializing custom hook
        // Then call cb()
        return cb();

      });
    }
  }

  authHook = Marlinspike.createSailsHook(Auth)
}

export default authHook;
