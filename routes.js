const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      res.write(
        `<html><head><title>Enter Message</title></head><body>${data}<form action="/message" method="POST"><input type="text" name="message" ><button type="submit" >send</button></form></body></html>`
      );
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
  if (url == "/node") {
    res.write(
      "<html><head><title>My first page</title></head><body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    res.end();
  }
};

// module.exports = requestHandler;

// module.exports={
//     handler:requestHandler,
//     someText:'some hard coded text'
// };

// module.exports.handler=requestHandler;
// module.exports.someText='some text';

exports.handler = requestHandler;
exports.someText = "some text";
