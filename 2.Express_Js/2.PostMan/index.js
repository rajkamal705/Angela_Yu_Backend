/**
 ->  client make a HTTP req from server.
 
 => HTTP responses status code: 
 -> Http response status codes indicate whether a specific HTTP request has been successfully completed or not.

 -> Responses are grouped in 5 classes:
 1> Informational responses (100-199)
 2> Successful responses (200-299);
 3> Redirection messages (300-399)
 4> client error responses (400-499)
 5> server error responses (500-599)

 Read more about http response in MDN.

1> Successful Responses: 
-> Status code: 200 OK

-> The request succeeded. The result and meaning of "success" depends on the HTTP method:

1> GET: The resource has been fetched and transmitted in the message body to the client.
2> HEAD: Representation headers are included in the response without any message body.
3> PUT or POST: The resource describing the result of the action is transmitted in the message body.
4> TRACE: The message body contains the request as received by the server.


=> Status code: 201 Created
-> The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.

2> Client error responses:
-> 400 Bad Request : The server cannot or will not process the request due to something that is perceived to be a client error.

 */

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello port!</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})