
import {React} from 'react';
import "../index.css"
import { Words } from '../word';
export default function Footer(){
    return(
        <div style={{backgroundColor:"" , height:"" ,position:"fixed", bottom:"0", width:"100%" ,}}>
            <div class="end-text">
                <p style={{color:"black"}}>{Words.footer_title}</p>
            </div>
        </div>
    );
}