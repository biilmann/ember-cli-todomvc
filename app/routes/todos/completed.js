import Ember from 'ember';

export default Ember.Route.extend({
  templateName: "todos/index",
  model: function () {
    return this.store.filter('todo', (todo) => todo.get('isCompleted'));
  }
});
