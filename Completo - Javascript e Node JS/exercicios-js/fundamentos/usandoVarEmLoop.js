
for(var a = 0; a < 10; a++){
    console.log(a)
}


const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()