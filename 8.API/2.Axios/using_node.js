import https from "https";
import { hostname } from "os";

app.get("/", (req, res) => {
    const options = {
        hostname: "bored-api.appbrewery.com", // base url of api, where it is hosted
        path: "/random", // path or endpoint
        method: "GET", // method to interact with api
    };

    const request = https.request(options, (response) => { 
        let data = "";
        response.on("data", (chunk) => { // response give data in the form of packet. so we add this in data string.
            data += chunk;
        });

        // once we receive "end" message from request, then we will parse the data and pass to ejs file using render method.
        response.on("end", () => {
            try {
                const result = JSON.parse(data);
                res.render("solution.ejs", {activity: data})
            } catch(error) {
                console.log("failed to parse response", error.message);
                res.status(500).send("Failed to fetch activity. please try again.");
            }
        });
    });

    // if there is some error from request, then handle this
    request.on("error", (error) => {
        console.log("failed to make request: ", error.message);
        res.status(500).send("Failed to fetch activity. please try again");
    });

    request.end();

});

