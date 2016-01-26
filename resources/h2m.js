#!/usr/bin/env node

/*
 * Before use this script, you need to install "nodejs" and the "to-markdown"
 * and "request" packages as well. At time moment I'm using:
 *
 * node.js: 5.5.0
 * to-markdown: 2.0.1
 * request: 2.67.0
 *
 * This script is used to convert an HTML file into a markdown format string
 * which is based on:
 *
 *   https://github.com/domchristie/to-markdown/
 *
 * Usage: ./h2m.js http://www.yinwang.org/blog-cn/2014/04/18/golang/index.html
 *
 * Created by Max Huang.
 */

// 1. Read the HTML file content.
var request = require('request');
request(
  {uri: process.argv[2]},
  function(error, response, body){
    if(!error) {
      var content = body.substring(
        body.indexOf('<body>') + '<body>'.length,
        body.indexOf('</body>'));
      // 2. Convert the HTML content to markdown format.
      var toMarkdown = require('to-markdown');
      var md = toMarkdown(content.toString());
      // 3. Write the markdown content.
      console.log(md);
    }
  });