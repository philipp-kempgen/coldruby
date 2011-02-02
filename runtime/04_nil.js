$.define_module('NilClass', $c.Class);

$.define_method($c.NilClass, 'inspect', 0, function(self) {
  return "nil";
});
$.define_method($c.NilClass, '&', 1, function(self, other) {
  return Qfalse;
});
$.define_method($c.NilClass, '|', 1, function(self, other) {
  return $.test(other) ? Qtrue : Qfalse;
});
$.define_method($c.NilClass, '^', 1, function(self, other) {
  return $.test(other) ? Qtrue : Qfalse;
});
$.define_method($c.NilClass, 'nil?', 0, function(self) {
  return Qtrue;
});
$.define_method($c.NilClass, 'to_s', 0, function(self) {
  return "";
});
$.define_method($c.NilClass, 'to_i', 0, function(sel) {
  return 0;
});

var Qnil = $.builtin.Qnil = {
  klass: $c.NilClass,
};