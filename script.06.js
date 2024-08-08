let arsenal = [ "T-800", "laser", "canhão de plasma", "míssel teleguiado", "serras", "lança chamas", "acido" ]


let ataques = [];

ataques.push(arsenal[0])
ataques.push(arsenal[3])
ataques.push(arsenal[1])
ataques.push(arsenal[4])
ataques.push(arsenal[5])
ataques.push(arsenal[6])
ataques.push(arsenal[2])

for (let i = 0; i < ataques.length; i++) {
    if(ataques[i] == ataques [0] ){
        console.log("Nome:" ,ataques[0]);
    }
console.log("ataque " + [i],":", ataques[i +1])
}

