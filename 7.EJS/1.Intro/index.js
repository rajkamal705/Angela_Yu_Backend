/**
 Q> why do we need EJS?
 -> syntax: index.ejs
 -> res.sendFile() method is used only to send static file.
 -> now we will use diff method called: res.render(). This will specify the file that we want to render on screen and along
    with that we can add some javascript object to pass over some properties as key-value pair.

=> EJS tags:
1> <%= variable %>  -> variable
2> <% console.log("hello") %> -> pure js code
3> <%- <h1>Hello</h1> %> -> To write html in ejs 
4> <%% %%> -> 
5> <%# this is a comment %>
6> <%- include("header.ejs") %> -> insert another ejs file

 */

import express from "express";
const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();
console.log(day);

let type = "a weekday";
let adv = "it's time to work hard";

if(day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to chill today";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}.`);
});
