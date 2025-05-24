import React, { useEffect, useState } from "react";
import "../index.css";
import A_unpressed from "../assets/images/keys_unpressed/A.png"
import B_unpressed from "../assets/images/keys_unpressed/B.png"
import C_unpressed from "../assets/images/keys_unpressed/C.png"
import D_unpressed from "../assets/images/keys_unpressed/D.png"
import E_unpressed from "../assets/images/keys_unpressed/E.png"
import F_unpressed from "../assets/images/keys_unpressed/F.png"
import G_unpressed from "../assets/images/keys_unpressed/G.png"
import H_unpressed from "../assets/images/keys_unpressed/H.png"
import I_unpressed from "../assets/images/keys_unpressed/I.png"
import J_unpressed from "../assets/images/keys_unpressed/J.png"
import K_unpressed from "../assets/images/keys_unpressed/K.png"
import L_unpressed from "../assets/images/keys_unpressed/L.png"
import M_unpressed from "../assets/images/keys_unpressed/M.png"
import N_unpressed from "../assets/images/keys_unpressed/N.png"
import O_unpressed from "../assets/images/keys_unpressed/O.png"
import P_unpressed from "../assets/images/keys_unpressed/P.png"
import Q_unpressed from "../assets/images/keys_unpressed/Q.png"
import R_unpressed from "../assets/images/keys_unpressed/R.png"
import S_unpressed from "../assets/images/keys_unpressed/S.png"
import T_unpressed from "../assets/images/keys_unpressed/T.png"
import U_unpressed from "../assets/images/keys_unpressed/U.png"
import V_unpressed from "../assets/images/keys_unpressed/V.png"
import W_unpressed from "../assets/images/keys_unpressed/W.png"
import X_unpressed from "../assets/images/keys_unpressed/X.png"
import Y_unpressed from "../assets/images/keys_unpressed/Y.png"
import Z_unpressed from "../assets/images/keys_unpressed/Z.png"

import A_pressed from "../assets/images/keys_pressed/A_pressed.png"; //use this current A as reference for subsequent asset redos
import B_pressed from "../assets/images/keys_pressed/B_pressed.png";
import C_pressed from "../assets/images/keys_pressed/C_pressed.png";
import D_pressed from "../assets/images/keys_pressed/D_pressed.png";
import E_pressed from "../assets/images/keys_pressed/E_pressed.png";
import F_pressed from "../assets/images/keys_pressed/F_pressed.png";
import G_pressed from "../assets/images/keys_pressed/G_pressed.png";
import H_pressed from "../assets/images/keys_pressed/H_pressed.png";
import I_pressed from "../assets/images/keys_pressed/I_pressed.png";
import J_pressed from "../assets/images/keys_pressed/J_pressed.png";
import K_pressed from "../assets/images/keys_pressed/K_pressed.png";
import L_pressed from "../assets/images/keys_pressed/L_pressed.png";
import M_pressed from "../assets/images/keys_pressed/M_pressed.png";
import N_pressed from "../assets/images/keys_pressed/N_pressed.png";
import O_pressed from "../assets/images/keys_pressed/O_pressed.png";
import P_pressed from "../assets/images/keys_pressed/P_pressed.png";
import Q_pressed from "../assets/images/keys_pressed/Q_pressed.png";
import R_pressed from "../assets/images/keys_pressed/R_pressed.png";
import S_pressed from "../assets/images/keys_pressed/S_pressed.png";
import T_pressed from "../assets/images/keys_pressed/T_pressed.png";
import U_pressed from "../assets/images/keys_pressed/U_pressed.png";
import V_pressed from "../assets/images/keys_pressed/V_pressed.png";
import W_pressed from "../assets/images/keys_pressed/W_pressed.png";
import X_pressed from "../assets/images/keys_pressed/X_pressed.png";
import Y_pressed from "../assets/images/keys_pressed/Y_pressed.png";
import Z_pressed from "../assets/images/keys_pressed/Z_pressed.png";

function Keyboard({pressed}){
    return(
        <div id="keyboard">
            <div id="top-row">
                <img src={pressed==="Q" ? Q_pressed : Q_unpressed} className={`unpressed-keys ${pressed === "Q" ? "pressed-key": ""}`}/>
                <img src={pressed==="W" ? W_pressed : W_unpressed} className={`unpressed-keys ${pressed === "W" ? "pressed-key": ""}`}/>
                <img src={pressed==="E" ? E_pressed : E_unpressed} className={`unpressed-keys ${pressed === "E" ? "pressed-key": ""}`}/>
                <img src={pressed==="R" ? R_pressed : R_unpressed} className={`unpressed-keys ${pressed === "R" ? "pressed-key": ""}`}/>
                <img src={pressed==="T" ? T_pressed : T_unpressed} className={`unpressed-keys ${pressed === "T" ? "pressed-key": ""}`}/>
                <img src={pressed==="Z" ? Z_pressed : Z_unpressed} className={`unpressed-keys ${pressed === "Z" ? "pressed-key": ""}`}/>
                <img src={pressed==="U" ? U_pressed : U_unpressed} className={`unpressed-keys ${pressed === "U" ? "pressed-key": ""}`}/>
                <img src={pressed==="I" ? I_pressed : I_unpressed} className={`unpressed-keys ${pressed === "I" ? "pressed-key": ""}`}/>
                <img src={pressed==="O" ? O_pressed : O_unpressed} className={`unpressed-keys ${pressed === "O" ? "pressed-key": ""}`}/>
            </div>
            <div id="middle-row">
                <img src={pressed==="A" ? A_pressed : A_unpressed} className={`unpressed-keys ${pressed === "A" ? "pressed-key": ""}`}/>
                <img src={pressed==="S" ? S_pressed : S_unpressed} className={`unpressed-keys ${pressed === "S" ? "pressed-key": ""}`}/>
                <img src={pressed==="D" ? D_pressed : D_unpressed} className={`unpressed-keys ${pressed === "D" ? "pressed-key": ""}`}/>
                <img src={pressed==="F" ? F_pressed : F_unpressed} className={`unpressed-keys ${pressed === "F" ? "pressed-key": ""}`}/>
                <img src={pressed==="G" ? G_pressed : G_unpressed} className={`unpressed-keys ${pressed === "G" ? "pressed-key": ""}`}/>
                <img src={pressed==="H" ? H_pressed : H_unpressed} className={`unpressed-keys ${pressed === "H" ? "pressed-key": ""}`}/>
                <img src={pressed==="J" ? J_pressed : J_unpressed} className={`unpressed-keys ${pressed === "J" ? "pressed-key": ""}`}/>
                <img src={pressed==="K" ? K_pressed : K_unpressed} className={`unpressed-keys ${pressed === "K" ? "pressed-key": ""}`}/>
            </div>
            <div id="bottom-row">
                <img src={pressed==="P" ? P_pressed : P_unpressed} className={`unpressed-keys ${pressed === "P" ? "pressed-key": ""}`}/>
                <img src={pressed==="Y" ? Y_pressed : Y_unpressed} className={`unpressed-keys ${pressed === "Y" ? "pressed-key": ""}`}/>
                <img src={pressed==="X" ? X_pressed : X_unpressed} className={`unpressed-keys ${pressed === "X" ? "pressed-key": ""}`}/>
                <img src={pressed==="C" ? C_pressed : C_unpressed} className={`unpressed-keys ${pressed === "C" ? "pressed-key": ""}`}/>
                <img src={pressed==="V" ? V_pressed : V_unpressed} className={`unpressed-keys ${pressed === "V" ? "pressed-key": ""}`}/>
                <img src={pressed==="B" ? B_pressed : B_unpressed} className={`unpressed-keys ${pressed === "B" ? "pressed-key": ""}`}/>
                <img src={pressed==="N" ? N_pressed : N_unpressed} className={`unpressed-keys ${pressed === "N" ? "pressed-key": ""}`}/>
                <img src={pressed==="M" ? M_pressed : M_unpressed} className={`unpressed-keys ${pressed === "M" ? "pressed-key": ""}`}/>
                <img src={pressed==="L" ? L_pressed : L_unpressed} className={`unpressed-keys ${pressed === "L" ? "pressed-key": ""}`}/>
            </div>
        </div>
    );
}

export default Keyboard;