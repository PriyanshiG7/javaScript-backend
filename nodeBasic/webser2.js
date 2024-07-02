const readline = require("readline");
const fs = require("fs");
const http = require("http");


const html=fs.readFileSync("./template/index.html" , 'utf-8');
let products =JSON.parse(fs.readFileSync('./Data/product.json' , 'utf-8'));
let productListHtml= fs.readFileSync('./template/product-list.html', 'utf-8');
 
let productHtmlArray=products.map((prod) => {
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output= output.replace('{{%NAME%}}' ,prod.name);
    output= output.replace('{{%MODELNAME%}}' ,prod.modName);
    output= output.replace('{{%MODELNO%}}' ,prod.modelNumber);
    output= output.replace('{{%SIZE%}}' ,prod.size);
    output= output.replace('{{%CAMERA%}}' ,prod.camera);
    output= output.replace('{{%PRICE%}}' ,prod.price);
    output= output.replace('{{%COLOR%}}' ,prod.color);

    return output;
     })
const server = http.createServer((request , response) =>{
    let path = request.url;
    
    if(path==='/'){
        response.writeHead(200);
        response.end(html.replace('{{%CONTENT%}}','You are in home page'));
    }
    
    else if(path ==='//'||path.toLocaleLowerCase() ==='/home'){
        response.writeHead(200);    // headers are this
    response.end(html.replace('{{%CONTENT%}}' , 'you are in home page'));
   }
   
   else if(path.toLocaleLowerCase()==='/about'){
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}', 'you are in about page'));
   }
   
   else if(path.toLocaleLowerCase()==='/contact'){
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}', 'you are in contact page'));
   }
   
   else if(path.toLocaleLowerCase()==='/login'){
    response.writeHead(200);
    response.end(html.replace('{{%CONTENT%}}', 'you are in login page'));
   }

   else if (path.toLocaleLowerCase()==='/products'){
   let productResponseHtml= html.replace('{{%CONTENT%}}',productHtmlArray.join(','));
    response.writeHead(200,{'content-type': 'text/html', })
    response.end(productResponseHtml);
    // console.log(productHtmlArray.join(','));
   
}

   
   else{
    response.writeHead(404,{
    'content-type': 'text/html',     // content type & my header are difine in  headers response inside inspect 
     'my-header': 'page not exist'
    });
    response.end(html.replace('{{%CONTENT%}}', 'Error 404 page not found'));
   }

});

server.listen(8000 ,()=>{
    console.log("listening on port 8000");
});