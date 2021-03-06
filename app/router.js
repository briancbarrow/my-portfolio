import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', { path: '/' });
  this.route('contact', { path: '/contact' });
  this.route('portfolio', { path: '/projects' });
  // this.route('projects');
});

export default Router;
