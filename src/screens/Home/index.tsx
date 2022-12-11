import React from "react";
import { ImageBackground , Text} from "react-native";

import BACKGROUND from '../../assets/images/background.png';
import { styles } from "./style";

import  Game from "./Game";

const Home =() => {
    return(
        <ImageBackground  source={BACKGROUND} style={styles.container}>
         <Game/>

        </ImageBackground>
    )
}

export { Home};