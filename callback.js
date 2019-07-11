var maxtime = 1000;

var evenDoubler = function(v, callback){

};

var handleResults = function(err, results, time){
    if(err){
        console.log('error:  ', + err.message);
    }
    else{
        console.log("The results are: " + results + "(" + time + "ms)");

    };

}
evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
evenDoubler(10, handleResults);
console.log("......................");