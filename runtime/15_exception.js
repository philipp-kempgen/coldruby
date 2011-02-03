$.define_class('Exception');

$.define_method($e.Exception, 'initialize', -1, function(self, args) {
  this.check_args(args, 0, 1);
  self.ivs['@message'] = args[0] || Qnil;
  self.ivs['@backtrace'] = Qnil;
});

$.define_method($e.Exception, '==', 1, function(self, other) {
  return (self.klass == other.klass && self.ivs.message == other.ivs.message &&
    $.test(this.funcall(this.self.ivs['@backtrace'], '==', other.ivs['@backtrace']))) ? Qtrue : Qfalse;
});

$.define_method($e.Exception, 'to_s', 0, function(self) {
  if(self.ivs.message != Qnil) {
    return self.ivs['@message'];
  } else {
    return self.klass.klass_name;
  }
});

$.define_method($e.Exception, 'message', 0, function(self) {
  return this.funcall(self, 'to_s');
});

$.attr('reader', $e.Exception, 'backtrace');
$.define_method($e.Exception, 'set_backtrace', 1, function(self, trace) {
  self.ivs['@backtrace'] = trace;
});

$.define_singleton_method($e.Exception, 'exception', -1, function(self, args) {
  return this.funcall2(self, 'new', args);
});

$.define_method($e.Exception, 'exception', -1, function(self, args) {
  if(args.length == 0) {
    return self;
  } else if(args.length == 1 && args[0] == self) {
    return self;
  } else {
    return this.funcall2(self.klass, 'new', args);
  }
});
