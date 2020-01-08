const express=require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const app=express();
app.use(bodyparser.json());



//-----------------------------database connection---------------------------------

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@12345',
    database:'dbnew'
});
    

con.connect(function(err)
{
    if(err)
    {
        console.log("error in database connection")
    }
    else
    {
        console.log("database connection is done")
    }
});
//-------------------------------get----------------------------------------
app.get('/count',function(req,res){
    var sql="select count(*) as count from personal";
    con.query(sql,function(error,result)
    {
        if(error)
        {
            console.log(error)
        }
        else
        {
            res.send((result[0].count).toString())
        }
    })

})

app.listen(4000);