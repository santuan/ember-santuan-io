import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  excerpt: DS.attr(),
  link: DS.attr(),
  img: DS.attr(),
});