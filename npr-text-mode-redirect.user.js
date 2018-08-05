// ==UserScript==
// @name NPR Text Mode Redirect
// @description Redirect to the site's text mode
// @namespace com.teddywing
// @match https://choice.npr.org/*
// ==/UserScript==


var location = document.location;

// Get the article ID from the URL.
// Example:
// https://choice.npr.org/index.html?origin=https://www.npr.org/2018/07/20/630792401/sleep-scientist-warns-against-walking-through-life-in-an-underslept-state
// The article ID is `630792401`
var params = new URLSearchParams(location.search.substring(1));
var redirect_url = params.get('origin');
var article_id = redirect_url.split('/')[6];

location.assign('https://text.npr.org/s.php?sId=' + article_id);
