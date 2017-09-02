/**
 * Created by Gayan Sampath on 9/1/2017.
 * @email gssampath.27@gmail.com
 */

var mongoose = require('mongoose');

//promotion schema
var promotionSchema = mongoose.Schema({

   name:{
       type:String,
       require:true
   },
   create_date:{
       type:Date,
       default:Date.now
   },
   date:{
         start_date:String,
         end_date:String
   },
   description:{
         type:String,
         require:true
   },
   location:{
         longitude  : {type:Number,require:true},
         latitude   : {type:Number,require:true}
   },
   image:{
         type:String,
         require:true
   }
});

var Promotion = module.exports = mongoose.model('Promotion',promotionSchema)

// Get promotion
module.exports.getPromotions = function(callback,limit){
   Promotion.find(callback).limit(limit);
}

// Get promotion by using name
module.exports.getPromotionByName = function(name,callback){
   Promotion.findByName(name,callback);
}

//add promotion
module.exports.addPromotion = function(promotion,callback){
   Promotion.create(promotion,callback);
}


//update promotion
module.exports.updatePromotion = function(name,promotion,options,callback){
  var query = {name:name};
  var update = {
     name:promotion.name,
     create_date:promotion.create_date,
     date:{
           start_date:promotion.start_date,
           end_date:promotion.end_date
     },
     description:promotion.description,
     location:{
           longitude  : promotion.longitude,
           latitude   : promotion.latitude
     },
     image:promotion.image
  }
   Promotion.findOneAndUpdate(promotion,update,option,callback);
}




//delete promotion
module.exports.removePromotion = function(name,callback){
    var query = {name:name};
   Promotion.remove(query,callback);
}






