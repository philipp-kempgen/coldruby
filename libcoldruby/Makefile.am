# ColdRuby -- V8-based Ruby implementation.
# Copyright (C) 2011  Sergey Gridassov <grindars@gmail.com>
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

noinst_LTLIBRARIES = libcoldruby.la
libcoldruby_la_SOURCES = StandardRubyCompiler.cpp MRIRubyCompiler.cpp \
	ColdRubyException.cpp ColdRuby.cpp ColdRubyVM.cpp \
	ColdRubyStackFrame.cpp ColdRubyStackTrace.cpp
noinst_HEADERS = StandardRubyCompiler.h MRIRubyCompiler.h RubyCompiler.h \
	ColdRubyRuntime.h ColdRubyException.h ColdRuby.h ColdRubyVM.h  \
	ColdRubyStackFrame.h ColdRubyStackTrace.h 
libcoldruby_la_CPPFLAGS = -D_GNU_SOURCE -DCOMPILER_ROOT="\"$(compilerdir)\"" \
	-DRUNTIME_ROOT="\"$(runtimedir)\"" ${MRI_CPPFLAGS}
