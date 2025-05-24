//guided by https://medium.com/@goncalorrc/enigma-machine-in-python-part-1-b9e220a8eaf3

import { AllCombinations } from "./PossibleCombinations";

export function RunPlugBoard(){ //simulate plugboard functionality with a function that swaps letters (a switch asset?)
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const plugboard = {};
    let freeIndexes = Array.from({length: 26}, (_, i)=>i);
    const finalCombination = [...alphabet];
    let n_pairs = 13;
    
    while(freeIndexes.length > 0 && n_pairs > 0){
        n_pairs -= 1;

        const index1 = freeIndexes.splice(Math.floor(Math.random()*freeIndexes.length), 1)[0];
        const index2 = freeIndexes.splice(Math.floor(Math.random()*freeIndexes.length), 1)[0];

        const temp = finalCombination[index1];
        finalCombination[index1] = finalCombination[index2];
        finalCombination[index2] = temp;
    }

    for(let i = 0; i < alphabet.length; i++){
        plugboard[alphabet[i]] = finalCombination[i];
    }
    
    return plugboard;
}

export function FetchPlugBoardLetter(letter, plugboard, isReverse){
    let newLetter;

    if (!isReverse){
        newLetter = plugboard[letter];
    }
    else{
        newLetter = Object.keys(plugboard).find(key=>plugboard[key]===letter);
    }
    
    return newLetter;
}

export function CreateRotors(){
    const rotors = [];
    let rotorsUsed = "\n Rotors: ";
    let combinations = AllCombinations();
    let possibleRotorCombos= combinations[0];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    for(let i = 0; i < 3; i++){
        const rotor = {};
        const randomRotorCombo = possibleRotorCombos[Math.floor(Math.random()*possibleRotorCombos.length)];
        rotorsUsed += "\n" + randomRotorCombo;

        for(let j = 0; j < randomRotorCombo.length; j++){
            rotor[alphabet[j]] = randomRotorCombo[j];
        }

        rotors.push(rotor);
    }
    
    return rotors;
}

export function CreateReflector(){
    const reflector = {};
    let reflectorUsed = "\n Reflector: ";
    let combinations = AllCombinations();
    let possibleReflectorCombos= combinations[1];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const randomReflectorCombo = possibleReflectorCombos[Math.floor(Math.random()*possibleReflectorCombos.length)];
    reflectorUsed += randomReflectorCombo;

    for(let i = 0; i < randomReflectorCombo.length; i++){
        reflector[alphabet[i]] = randomReflectorCombo[i];
    }
    return reflector;
}

export function SetupEnigma(){
    const plugboard = RunPlugBoard();

    const rotors = CreateRotors();
    const reflector = CreateReflector();

    return [plugboard, rotors, reflector];
}

export function RunEnigma(letter, rotors, reflector){ //runs enigma machine on input letter
    let newLetter = letter;
    for(let j = 0; j < 3; j++){
        const rotor = rotors[j];
        newLetter = rotor[newLetter];
    }
    newLetter = reflector[newLetter];
    for(let i = 2; i>=0; i--){
        const rotor = rotors[i];
        newLetter = Object.keys(rotor).find(key=>rotor[key]===newLetter);
    }
    return newLetter;
}

function ShiftValues(rotor){
    const keys = Object.keys(rotor);
    const values = Object.values(rotor);
    const newCombination = [values[values.length-1], ...values.slice(0, values.length-1)];
    keys.forEach((key, index)=>{
        rotor[key] = newCombination[index];
    });
    return rotor;
}

export function UpdateRotors(rotors, rotors_rotation){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    rotors_rotation[0] = rotors_rotation[0]+1;
    rotors[0] = ShiftValues(rotors[0]);
    for(let i = 0; i < rotors_rotation.length; i++){
        if(rotors_rotation[i]%alphabet.length===0 && rotors_rotation[i]!==0){
            rotors_rotation[i] = 0;
            if(i+1<rotors.length){
                rotors_rotation[i+1] = rotors_rotation[i+1]+1;
                rotors[i+1] = ShiftValues(rotors[i+1]);
            }
        }
    }
    return rotors;
}

export function EncodeLetter(letter, plugboard, rotors, reflector){ //properly encodes a letter by running it through the entire machine
    let codedLetter = FetchPlugBoardLetter(letter, plugboard, false);
    codedLetter = RunEnigma(codedLetter, rotors, reflector);
    codedLetter = FetchPlugBoardLetter(codedLetter, plugboard, true);
    console.log("CODED LETTER: ", codedLetter);
    return codedLetter;
}