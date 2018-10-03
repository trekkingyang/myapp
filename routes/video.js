var express = require('express');
var router = express.Router();

var db = require("../config/db");

/**
 * 查询列表页
 */
router.get("/:id",function(req,res,next){
  db.query("select * from video where id = " + req.params.id,function(err,rows){
    if(err){
      res.send({code:1,message: err});
    }else {
      res.send({code:0,data:rows});
    }
  });
});

router.post("/add",function(req,res,next){
  var name = req.body.name;
  var sex = req.body.sex;
  db.query("insert into video(name,sex) values('"+name+"','"+ sex +"')",function(err,rows){
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
  db.query("delete from student where id = " + id,function(err,rows){
    if(err){
      res.send({code:1,message:"删除失败"+err});
    }else {
      res.send({code:0,message:'删除成功'})
    }
  });
});

router.post("/update",function(req,res,next){
  var id = req.body.id;
  var name = req.body.name;
  var sex = req.body.sex;
  var sql = "update student set name = '"+ name +"',sex = '"+ sex +"' where id = " + id;
  console.log(sql);
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
  var name = req.body.s_name;
  var sex = req.body.s_age;
  var sql = "select * from student";
  if(name){
    sql += " where name = '"+ name +"'";
  }
  
  sql.replace("and","where");
  db.query(sql,function(err,rows){
    if(err){
      res.send({code:1,message:'查询失败'+err});
    }else{
      res.send({code:0,data:rows,message:''});
    }
  });
})

module.exports = router;