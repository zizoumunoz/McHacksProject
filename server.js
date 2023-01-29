
var http = require('http'),
    fs = require('fs');
qs = require('querystring')
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
        if (request.method === 'POST') {
            var data = '';
            var body = '';
            request.on('data', function (data) {
                body += data;
            });
            request.on('end', function () {
                var post = qs.parse(body);
                toast(post);
            });
        }
    }).listen(8000);
});



function toast(post) {
    content = post
    console.log('toast method reached');
    if (post.foo == 'Waffle') {
        fs.appendFile('text.txt', post.test1, function (err) {
            if (err) {
            }
            console.log('written');
            console.log(post.test1);
        });
    }

}