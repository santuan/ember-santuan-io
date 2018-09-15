'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-santuan-io',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCM1_mhuP_zLcOp0AV6JUnnCkzAv-gkUtY",
      authDomain: "santuandg-14679.firebaseapp.com",
      databaseURL: "https://santuandg-14679.firebaseio.com",
      projectId: "santuandg-14679"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    pace: {
        color: 'green',
        theme: 'minimal',
        catchupTime: 50,
        initialRate: .01,
        minTime: 100,
        ghostTime: 50,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: true,
        restartOnPushState: true,
        restartOnRequestAfter: 500,
        target: 'body',
        elements: {
          checkInterval: 100,
          selectors: ['body', '.ember-view']
        },
        eventLag: {
          minSamples: 10,
          sampleCount: 3,
          lagThreshold: 3
        },
        ajax: {
          trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
          trackWebSockets: true,
          ignoreURLs: []
        }
      }
      
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
