import React from "react";
import "../index.css";

function Lamps({pressed}){
    return(
        <div id="lamps">
            <div id="top-row">
                <div class="lamp" className={`lamp ${pressed === "Q" ? "lit-lamp": ""}`}>Q</div>
                <div class="lamp" className={`lamp ${pressed === "W" ? "lit-lamp": ""}`}>W</div>
                <div class="lamp" className={`lamp ${pressed === "E" ? "lit-lamp": ""}`}>E</div>
                <div class="lamp" className={`lamp ${pressed === "R" ? "lit-lamp": ""}`}>R</div>
                <div class="lamp" className={`lamp ${pressed === "T" ? "lit-lamp": ""}`}>T</div>
                <div class="lamp" className={`lamp ${pressed === "Z" ? "lit-lamp": ""}`}>Z</div>
                <div class="lamp" className={`lamp ${pressed === "U" ? "lit-lamp": ""}`}>U</div>
                <div class="lamp" className={`lamp ${pressed === "I" ? "lit-lamp": ""}`}>I</div>
                <div class="lamp" className={`lamp ${pressed === "O" ? "lit-lamp": ""}`}>O</div>
            </div>
            <div id="middle-row">
                <div class="lamp" className={`lamp ${pressed === "A" ? "lit-lamp": ""}`}>A</div>
                <div class="lamp" className={`lamp ${pressed === "S" ? "lit-lamp": ""}`}>S</div>
                <div class="lamp" className={`lamp ${pressed === "D" ? "lit-lamp": ""}`}>D</div>
                <div class="lamp" className={`lamp ${pressed === "F" ? "lit-lamp": ""}`}>F</div>
                <div class="lamp" className={`lamp ${pressed === "G" ? "lit-lamp": ""}`}>G</div>
                <div class="lamp" className={`lamp ${pressed === "H" ? "lit-lamp": ""}`}>H</div>
                <div class="lamp" className={`lamp ${pressed === "J" ? "lit-lamp": ""}`}>J</div>
                <div class="lamp" className={`lamp ${pressed === "K" ? "lit-lamp": ""}`}>K</div>
            </div>
            <div id="bottom-row">
                <div class="lamp" className={`lamp ${pressed === "P" ? "lit-lamp": ""}`}>P</div>
                <div class="lamp" className={`lamp ${pressed === "Y" ? "lit-lamp": ""}`}>Y</div>
                <div class="lamp" className={`lamp ${pressed === "X" ? "lit-lamp": ""}`}>X</div>
                <div class="lamp" className={`lamp ${pressed === "C" ? "lit-lamp": ""}`}>C</div>
                <div class="lamp" className={`lamp ${pressed === "V" ? "lit-lamp": ""}`}>V</div>
                <div class="lamp" className={`lamp ${pressed === "B" ? "lit-lamp": ""}`}>B</div>
                <div class="lamp" className={`lamp ${pressed === "N" ? "lit-lamp": ""}`}>N</div>
                <div class="lamp" className={`lamp ${pressed === "M" ? "lit-lamp": ""}`}>M</div>
                <div class="lamp" className={`lamp ${pressed === "L" ? "lit-lamp": ""}`}>L</div>
            </div>
        </div>
    );
}

export default Lamps;