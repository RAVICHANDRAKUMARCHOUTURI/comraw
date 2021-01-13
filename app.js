const express = require('express')
const app = express()
const ejs = require('ejs');
const port = 3000;
app.use( express.static( "public" ) );

app.set('view engine','ejs');


var name =[];
var name1 =[];
var name2 =[];
var name3 =[];
var boysarray = [];





                                          
app.get( "/",function(req,res)
{  
  var k =1;
  for (var j=1;j<=3;j++)
  {  

               for (var i =1 ; i<=10;i++)
                {     
                     name [k] = "images/"+j+"/chapter-"+i+"/1.jpg";        
                     name1 [i] = "boys"+i;
                     k++;
     
                }
  }
 res.render("home" , {image : name , image1 : name1});
})





app.get("/login" , function(req,res){
  res.render("log-in");
})

app.get("/signup" , function(req,res){
  res.render("sign-up");
})








var fun= "/comics";
app.get(fun,function(req,res)
{
  console.log("j   |  i")
  console.log("________")

                      var k =1;
                      var n=1;
                      for (var j=1;j<=3;j++)
                      {            
                                  for (var i =1 ; i<=10;i++)
                                  {     
                                    name [k] = "/images/"+j+"/chapter-"+i+"/1.jpg";   
                                       
                                       if(j===1){
                                        name1 [n] = "boys"+i;
                                       }
                                       if(j===2){
                                        name1 [n] = "/ultron"+i;
                                       }
                                       if(j===3){
                                        name1 [n] = "/bat"+i;
                                       }
                                       console.log("  ________")  
                                       console.log("|"+j+"   |  "+i+"|"  + name1[i])  
                                       console.log("  ________")   
                                    
                                    k++;n++;
                                  
                                  }
                    
                    
                      }
     res.render("comicbook" , {image : name , image1 : name1});

})


 

/*for (var i = 1; i <=10; i++){
  (function(i){
    boysarray [i]="/boys"+i;
      app.get(boysarray [i], function(req, res){
        for (var i =1 ; i<=32;i++)
        {
              console.log(boysarray[i]);
          
          name3 [i] = "/images/1/chapter-"+j+"/"+i+".jpg";
          console.log("boysarray["+i+"]  new " + boysarray[i]   + "    j is " + j + "    i is"+ i)
          console.log("name3["+i+"]   "+name3[i]);
          console.log( "  ");
          //console.log( "               i is  " + i);

          
        }
     
      res.end();
  })})(i);
}*/
/*

for(var j=1;j<=10; j++)
{
     boysarray [j]="/boys"+j;
                app.get(boysarray [j],function(req,res)
                {        
                  
                          console.log("boysarray["+j+"]")
                           
                                for (var i =1 ; i<=32;i++)
                                {
                                      
                                  
                                  name3 [i] = "/images/1/chapter-"+j+"/"+i+".jpg";
                                  console.log("boysarray["+i+"]   " + boysarray[i]   + "    j is " + j + "    i is"+ i)
                                  console.log("name3["+i+"]   "+name3[i]);
                                  console.log( "  ");
                                  //console.log( "               i is  " + i);

                                  
                                }
                             
                         
                        
                  res.render("book" , { image :name3 });
                })
               
}*/
     
 
app.get("/boys1",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-1/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys2",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-2/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys3",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-3/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys4",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-4/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys5",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-5/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys6",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-6/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})


app.get("/boys7",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-7/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys8",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-8/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys9",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-9/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/boys10",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/1/chapter-10/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})

app.get("/ultron1",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-1/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron2",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-2/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron3",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-3/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron4",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-4/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron5",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-5/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron6",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-6/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron7",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-7/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron8",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-8/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron9",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-9/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/ultron10",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/2/chapter-10/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/bat1",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/3/chapter-1/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})

app.get("/bat2",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/3/chapter-2/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/bat3",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/3/chapter-3/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/bat4",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/3/chapter-4/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})
app.get("/bat5",function(req,res){
  for (var i =1 ; i<=32;i++)
  {
        
    
    name3 [i] = "/images/3/chapter-5/"+i+".jpg";
    
    
  }
  res.render("book" , { image :name3 });
})







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

