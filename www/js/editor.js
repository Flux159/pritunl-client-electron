var Editor = function Editor($container) {
  this.editor = null;
  this.$container = $container;
};

Editor.prototype.create = function(data) {
  this.editor = ace.edit(this.$container[0]);
  this.editor.setTheme('ace/theme/cobalt');
  this.editor.setFontSize(12);
  this.editor.setShowPrintMargin(false);
  this.editor.setShowFoldWidgets(false);
  this.editor.getSession().setMode('ace/mode/text');
  this.editor.getSession().setValue(data);
};

Editor.prototype.destroy = function() {
  this.editor.destroy();
  this.editor = null;
  this.$container.empty();
};

Editor.prototype.get = function() {
  return editor.getSession().getValue();
};

Editor.prototype.set = function(data) {
  return editor.getSession().setValue(data);
};