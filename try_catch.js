// agar error aa rha then use try to identify the error and catch to see the error 
// inside the try func : the code should be synchronous not async

setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(rahul)  
            }, 100)
    }
    catch(err){
            console.log("Balle balle")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
    }, 4000) 