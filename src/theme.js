import { Platform,StatusBar } from "react-native";

export const colors = {
    bg:'#fdfdfde8', 
    surface:'#cc0000',
    border:'#690000',
    Text:'#1111',
    muted:'#f8f7f7f1',
    cyan:'#ff8080d7',
    beart:'#b42020da'
}

export const TOP_INSET = Platform.os === 'android'? StatusBar.currentHeight|| 0:44;