var http=require ('http');
var url= require('url');
var querystring= require('querystring');
var server = http.createServer(function(req,res){
    var params =querystring.parse(url.parse(req.url).query);
   
    // var page = url.parse(req.url).pathname;
    // console.log(page);
    res.writeHead(200,{"Content-Type":"text/html"});
    if('id'  in params && 'login'in params ){
        res.write('votreid '+params['id']+'est votrelogin ' +params['login']);
    }
    else{
        res.write('veuillez saisir votre id et login');

    }
    res.end;
 /*    if(page=='/'){
    res.write('bien en avance!');
    }
    else if (page=='/contact'){
        res.write('ahhdhdbghhanb')
    }
    else if (page == '/Affichage/1/user'){
        res.write('hhjbsbjskjnbszq')
        return{status:200,message:"contact pge!"}
        else
        404
        res.writehead(responseLogs.status)
        const  responseLogs =routeLogger(path);
        <h1>${responseLogs.message}</h1>
${} est la meme ''+    } */
res.end();
});
server.listen(8080);

/* var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<!DOCTYPE html>'+'<html>'+'<head>'+'<meta charset"utf-8/>'+'<title>ma page nodejs </title>'+'</head>'+'</body>'+'<p> voiciiinn</p>'+'</body>'+'</html>');
res.end();
});
server.listen(8080);
 */