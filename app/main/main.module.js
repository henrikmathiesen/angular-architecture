angular.module('main', ['about'])
    
    .config(function(){
       console.log("Main Config"); 
    })
    
    .run(function(){
        console.log("Main Run");
    });
    
    

    
/*

    Order of execution for config and run
    - about modules config
    - main modules config
    - about modules run
    - main modules run
    
 */