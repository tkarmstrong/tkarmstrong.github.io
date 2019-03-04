/*
============================================
; Title:  Assignment X.X - Title Goes Here
; Author: Tyler Armstrong
; Date:   xx March 2019
; Modified By: N/A
; Description: Showcases xxxxxxx.
;===========================================
*/

const express = require("express");

const http = require("http");

const app = express();

const path = require("path");

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

http.createServer(app).listen(8080, function() {
  console.log("ejs-views app listening on port 8080.");
});
