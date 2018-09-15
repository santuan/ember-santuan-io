import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('works', function() {
      this.route('show', { path: ":works_id/show" });
  });
  this.route('collections');
});

export default Router;
