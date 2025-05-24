import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import Keyboard from "../components/Keyboard";
import Lamps from "../components/Lamps";

import A from "../assets/images/rotors/orientations/A.png";
import B from "../assets/images/rotors/orientations/B.png";
import C from "../assets/images/rotors/orientations/C.png";
import D from "../assets/images/rotors/orientations/D.png";
import E from "../assets/images/rotors/orientations/E.png";
import F from "../assets/images/rotors/orientations/F.png";
import G from "../assets/images/rotors/orientations/G.png";
import H from "../assets/images/rotors/orientations/H.png";
import I from "../assets/images/rotors/orientations/I.png";
import J from "../assets/images/rotors/orientations/J.png";
import K from "../assets/images/rotors/orientations/K.png";
import L from "../assets/images/rotors/orientations/L.png";
import M from "../assets/images/rotors/orientations/M.png";
import N from "../assets/images/rotors/orientations/N.png";
import O from "../assets/images/rotors/orientations/O.png";
import P from "../assets/images/rotors/orientations/P.png";
import Q from "../assets/images/rotors/orientations/Q.png";
import R from "../assets/images/rotors/orientations/R.png";
import S from "../assets/images/rotors/orientations/S.png";
import T from "../assets/images/rotors/orientations/T.png";
import U from "../assets/images/rotors/orientations/U.png";
import V from "../assets/images/rotors/orientations/V.png";
import W from "../assets/images/rotors/orientations/W.png";
import X from "../assets/images/rotors/orientations/X.png";
import Y from "../assets/images/rotors/orientations/Y.png";
import Z from "../assets/images/rotors/orientations/Z.png";
import gears_Icon from "../assets/images/rotors/gears.png";
import rod_Icon from "../assets/images/rotors/rod.png";

import keypress_audio from "../assets/audio/keypress_audio.mp3";
import gears_audio from "../assets/audio/gears_audio.mp3";

import { SetupEnigma, EncodeLetter, UpdateRotors} from "../EncryptAlgo";


function HomePage(){
    const [input, setInput] = useState("");
    const [encodedInput, setEncodedInput] = useState("");
    const [fullEncodedInput, setFullEncodedInput] = useState("");
    const [rotorLetters, setRotorLetters] = useState(["A", "A", "A"]);
    const [openDescription, setOpenDescription] = useState(false);
    const keypress_audio_object = useRef(null);
    const gears_audio_object = useRef(null);
    const [longTermInput, setLongTermInput] = useState("");
    const [isBackspaceKey, setIsBackspaceKey] = useState(false);

    const logKeyPress = (e) => {
        setIsBackspaceKey(e.key==="Backspace");
    }

    const rotor_images = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z};

    //enigma machine initialization
    const machine = useRef(null);
    useEffect(()=>{
        const [plugboard, rotors, reflector] = SetupEnigma();
        const rotors_rotations = Array.from({length: 3}, ()=>Math.floor(Math.random()*26));
        const initial_rotor_letters = rotors_rotations.map(r => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r%26]);
        setRotorLetters(initial_rotor_letters);
        machine.current = {plugboard, rotors, reflector, rotors_rotations};
        keypress_audio_object.current = new Audio(keypress_audio);
        keypress_audio_object.current.volume = 0.3;
        gears_audio_object.current = new Audio(gears_audio);
        gears_audio_object.current.volume = 0.85;
    }, []);

    const handleInputEntered = (e) => {
        const currInput = e.target.value.replace(/^input text:\s*/, "");
        const post_length = currInput.length;

        if(isBackspaceKey && post_length == 0 && currInput.length == longTermInput.length){
            setLongTermInput(prev=>prev);
            setEncodedInput("");
        }
        else if(isBackspaceKey && currInput.length < longTermInput.length && post_length >= 0){
            let i = 0;
            while(i < currInput.length && currInput[i]===longTermInput[i]){
                i++;
            }
            let longTermEnd = longTermInput.length-1;
            let currEnd = currInput.length-1;
            while(currEnd >= i && longTermInput[longTermEnd]===currInput[currEnd]){
                longTermEnd=longTermEnd-1;
                currEnd=currEnd-1;
            }
            setFullEncodedInput((prev)=>prev.slice(0, i) + prev.slice(longTermEnd+1));
            setLongTermInput(currInput);
        }
        else{
            const letter = e.target.value.charAt(e.target.value.length-1);
            const input_case = (letter===letter.toUpperCase() && letter!==letter.toLowerCase()) ?  "U" : "L";

            const text = letter.toUpperCase();
            let encodedLetter = "";

            if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text) === false){
                encodedLetter = text;
            }
            else{
                const {plugboard, rotors, reflector, rotors_rotations} = machine.current;
                encodedLetter = EncodeLetter(text, plugboard, rotors, reflector);
                UpdateRotors(rotors, rotors_rotations);
                const updatedRotorLetters = rotors_rotations.map(r => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r%26]);
                setRotorLetters(updatedRotorLetters);
    
                keypress_audio_object.current.currentTime = 0;
                keypress_audio_object.current.play();
                gears_audio_object.current.currentTime = 0;
                gears_audio_object.current.play();
            }
    
            setInput(text);
            setEncodedInput(encodedLetter);
            if(input_case==="U"){
                setFullEncodedInput(prev => prev + encodedLetter);
            }
            else{
                setFullEncodedInput(prev => prev + encodedLetter.toLowerCase());
            }
            setLongTermInput(currInput);
        }
    }

    useEffect(() => {
        if (!input) return;
        const timeout = setTimeout(()=>{
            setInput("");
            setEncodedInput("");
        }, 150);
        return () => clearTimeout(timeout);
    }, [input]);

    return(
        <div id = "card">
            <div id="mobile-view">
                <div id="mobile-inner">
                    enigma was meant for physical keyboards, please switch to a bigger device.
                </div>
            </div>
            <div id = "top-rectangle">
                <div>
                    the enigma machine.  
                    <div class="inner-description">
                        <button onClick={()=>setOpenDescription(true)}>about</button>
                    </div>
                </div>
            </div>
            <div id = "bottom-rectangle">
                <div id="enigma-body">
                    <div id="display-area">
                        <textarea id = "plain-text-input" rows="12" cols="50" onChange={handleInputEntered} onKeyDown={logKeyPress} value={"input text: " + longTermInput}>input text: </textarea>
                        <div id="rotors-container">
                            <img src={rod_Icon} id="rod"/>
                            <div id="rotors">
                                <img src={rotor_images[rotorLetters[0]]} class="rotor"/>
                                <img src={gears_Icon} class="gears"/>
                                <img src={rotor_images[rotorLetters[1]]} class="rotor"/>
                                <img src={gears_Icon} class="gears"/>
                                <img src={rotor_images[rotorLetters[2]]} class="rotor"/>
                            </div>
                        </div>
                        <textarea id = "encoded-output" rows="12" cols="50" value={"encoded text: " + fullEncodedInput}>encoded text: </textarea>
                    </div>
                    <Lamps pressed={encodedInput}/>
                    <Keyboard pressed={input}/>
                </div>
            </div>
        {openDescription && (
            <div class="description-modal">
                <div class="description-content">
                    <div class="description-modal-close-header">
                        <span class="description-modal-title">enigma's history and structure.</span>
                        <button class = "close-description-modal" onClick={()=>setOpenDescription(false)}>X</button>
                    </div>
                    <div class="description" style={{paddingTop: '5%'}}>
                        The Enigma machine was a German encryption device used during World War 2. The machine can 
                        encode messages in billions of different ways, which rendered it virtually unsolvable until Alan Turing
                        and a group of mathematicians built a countering decryption device, the Bombe. 
                    </div>
                    <div class="description">
                        Enigma's complexity is due to a combination of mathematical group theory and mechanical ingenuity, with three main parts:
                        a plugboard, rotors, and reflector. 
                    </div>
                    <div class="description">
                        The plugboard generates random pairings of each letter by exhaustively generating pairs every time the page is reloaded.
                    </div>
                    <div class="description">
                        The plugboard input is then sequentially passed through each rotor, which increment by 1 with each entered input letter. 
                    </div>
                    <div class="description" style={{paddingBottom: '7.5%'}}>
                        After passing through the three rotors, a reflector passed the encoded letter back through the rotors in the opposite
                        direction for an added layer of encryption. 
                    </div>
                    <div class="description-modal-footer">
                        <button class="description-footer-button" onClick={()=>setOpenDescription(false)}>close</button>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

export default HomePage;