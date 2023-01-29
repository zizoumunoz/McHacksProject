var http = require('http'),
	fs = require('fs');
	qs = require('querystring')
	
	
http.createServer(function (req, res) {
		if (req.method === 'POST'){
			var data = '';
			var body = '';
			req.on('data', function(data){
				body += data;
			});
			req.on('end', function(){
				var post = qs.parse(body);
				toast(post);
			});
		}
}).listen(5500);



function toast(post){
	content = post
	console.log('toast method reached');
	console.log(content);
	fs.appendFile('text.txt', post.test1, function (err){
	if (err){
	}
	console.log('written');
	console.log(post.test1);
	});
	
	
}