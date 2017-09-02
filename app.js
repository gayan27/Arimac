/**
 * Created by Gayan Sampath on 9/1/2017.
 * @email gssampath.27@gmail.com
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Promotion = require('./models/promotion')


//Connect to Mongoose
mongoose.connect('mongodb://localhost/project');
var db = mongoose.connection;


/*
app.get('/',function(req,res){
   res.send('Hello World!');
});
*/



  //get all promotion
app.get('/api/promotions',function(req,res){
       Promotion.getPromotions(function(err,promotions){
          if(err){
            throw err;
          }
          res.json(promotions);
       });
});

  //get promotion using name
app.get('/api/promotions/:name',function(req,res){
       Promotion.getPromotionByName(req.params.name, function(err,promotion){
          if(err){
            throw err;
          }
          res.json(promotion);
       });
});



  //add promotion
app.post('/api/post/promotions',function(req,res){
       var promotion = req.body;
       Promotion.addPromotion(promotion,function(err,promotion){
          if(err){
            throw err;
          }
          res.json(promotion);
       });
});



  //update promotion
app.put('/api/update/promotions/:name',function(req,res){
       var name = req.params.name;
       var promotion = req.body;
       Promotion.updatePromotion(name,promotion,{},function(err,promotion){
          if(err){
            throw err;
          }
          res.json(promotion);
       });
});




  //delete promotion
app.delete('/api/delete/promotions/:name',function(req,res){
       var name = req.params.name;
       Promotion.removePromotion(name,function(err,promotion){
          if(err){
            throw err;
          }
          res.json(promotion);
       });
});



app.listen(3000);
console.log('Running on port 3000...');
