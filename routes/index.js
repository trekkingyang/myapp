var express = require('express');
var router = express.Router();
var db = require("../config/db");

/* GET home page. */
router.get("/list",function(req,res,next){
  db.query("select * from list",function(err,rows){
    if(err){
      res.send({code:1,message: err});
    }else {
      res.send({code:0,data:rows});
    }
  });
});

router.post("/clickRecord",function(req,res,next){
  var deviceId = req.body.deviceId;
  var detailId = req.body.detailId;
  db.query("insert into clickRecord(deviceId,detailId) values('"+deviceId+"','"+ detailId +"')",function(err,rows){
    if(err){
      res.send({code:1,message:"新增失败"+err});
    }else {
      res.send({code:0,message:'添加成功'})
    }
  });
});
router.post("/favorRecord",function(req,res,next){
  console.log(req.body);
  var deviceId = req.body.deviceId;
  var detailId = req.body.detailId;
  db.query("insert into favor(deviceId,detailId) values('"+deviceId+"','"+ detailId +"')",function(err,rows){
    if(err){
      res.send({code:1,message:"新增失败"+err});
    }else {
      res.send({code:0,message:'添加成功'})
    }
  });
});
router.post("/add",function(req,res,next){
  var title = req.body.title;
  var thumb = req.body.thumb;
  var type = req.body.type;
  var category = req.body.category;
  var source = req.body.source;
  var video_id = req.body.videoId;
  db.query("insert into list(title,thumb,type,category,source,video_id) values('"+title+"','"+ thumb +"','"+ type +"','"+ category +"','"+ source +"','"+ video_id +"')",function(err,rows){
    if(err){
      res.send({code:1,message:"新增失败"+err});
    }else {
      res.send({code:0,message:'添加成功'})
    }
  });
});
/**
 * 删除用户
 */
router.post("/delete/:id",function(req,res){
  var id = req.params.id;
  db.query("delete from list where id = " + id,function(err,rows){
    if(err){
      res.send({code:1,message:"删除失败"+err});
    }else {
      res.send({code:0,message:'删除成功'})
    }
  });
});

router.post("/update",function(req,res,next){
  var title = req.body.title;
  var thumb = req.body.thumb;
  var type = req.body.type;
  var category = req.body.category;
  var source = req.body.source;
  var video_id = req.body.videoId;
  var sql = "update list set title = '"+ title +"',thumb = '"+ thumb + ',type='+type+ ',category=' + category + ',source=' + source + ',video_id=' + video_id +"' where id = " + id;
  db.query(sql,function(err,rows){
    if(err){
      res.send({code:1,message:err});
    }else {
      res.send({code:0,message:"更新成功"});
    }
  });
});


/**
 * 查询
 */
router.get("/search",function(req,res,next){
  var category = req.body.category;
  var sql = "select * from list";
  if(name){
    sql += " where category = '"+ category +"'";
  }
  
  sql.replace("and","where");
  db.query(sql,function(err,rows){
    if(err){
      res.send({code:1,message:'查询失败'+err});
    }else{
      res.send({code:0,data:rows,message:'success'});
    }
  });
})

module.exports = router;
