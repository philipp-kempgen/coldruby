all: coldruby

coldruby: src/coldruby.cpp
	g++ -lv8 -o $@ $<