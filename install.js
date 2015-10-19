#!/usr/bin/env node
var fs = require('fs');
var dir = process.argv[2];
var exec = require('child_process').exec;
fs.readdir(dir,function(error,files){
    for (var i=0; i< files.length; i++) {
        if (files[i] != "README.md") {
            var path = dir + files[i];
            exec("xcodesnippet install " + path, function(err,stdout,stderror){
                if(err) throw err;
                console.log(stdout);
            });
        }

    }

});