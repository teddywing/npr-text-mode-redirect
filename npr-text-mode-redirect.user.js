// ==UserScript==
// @name NPR Text Mode Redirect
// @description Redirect to the site's text mode
// @namespace com.teddywing
// @match https://choice.npr.org/*
// ==/UserScript==

// Copyright (c) 2018  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.


var location = document.location;

// Get the article ID from the URL.
// Example:
// https://choice.npr.org/index.html?origin=https://www.npr.org/2018/07/20/630792401/sleep-scientist-warns-against-walking-through-life-in-an-underslept-state
// The article ID is `630792401`
var params = new URLSearchParams(location.search.substring(1));
var redirect_url = params.get('origin');
var article_id = redirect_url.split('/')[6];

location.assign('https://text.npr.org/s.php?sId=' + article_id);
