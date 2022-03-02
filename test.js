var shortUrl = require("node-url-shortener");

shortUrl.short("https://codeportal.in", function (err, url) {
    return url;
});
