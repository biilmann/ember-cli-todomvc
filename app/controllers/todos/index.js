import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['todos'],
  allTodos: Ember.computed.alias('controllers.todos'),
  itemController: 'todo',
  canToggle: function () {
    var anyTodos = this.get('allTodos.length');
    var isEditing = this.isAny('isEditing');

    return anyTodos && !isEditing;
  }.property('allTodos.length', '@each.isEditing')
});
