const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
const vocals = ["a","e","i","o","u"];

let numSil = determineN(2,3);
let chickenName = [];

for(let i = 0; i < numSil; i++){
    let numLet = 2;//determineN(2,3);
    let sil = determineSil(numLet);
    chickenName.push(sil);
}

console.log(chickenName)


function determineN(min,max){
    const rand = Math.random();
    const steps = max - min + 1;
    let count = min;
    for(let i = 1; i <= steps; i++){
      const stepL = (i-1)/steps;
      const stepH = (i)/steps;

      if(stepL<rand&&rand<stepH){
          return count;
      }
      
      count++
    }
}

function determineSil(numLet){
    let sil = [];

   // if(numLet == 1)sil.push(pickRandom(vocals));
    if(numLet == 2){
        sil.push(pickRandom(consonants));
        sil.push(pickRandom(vocals));
    }
    if(numLet == 3){
        sil.push(pickRandom(consonants));
        sil.push(pickRandom(vocals));
        sil.push(pickRandom(consonants));
    }

    return sil;
}

function pickRandom(array){
    const rand = Math.random();
    for(let i = 0; i < array.length;i++){
        const stepL = i/array.length;
        const stepH = (i+1)/array.length;
        if(stepL<rand&&rand<stepH){
            return array[i]
        }
    }
}

