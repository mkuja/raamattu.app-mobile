import {StatusBar, View} from "react-native";
import TopBar from "../components/TopBar";
import BookList from "../components/BookList";
import {MD3LightTheme as DefaultTheme} from "react-native-paper";
import themes from "../assets/themes.json";


const theme = {
    ...DefaultTheme,
    colors: themes.lightTheme
}


const LandingScreen = () => {
    return (
        <View>
            <BookList/>
            <StatusBar style="auto"/>
        </View>
    )
}

export default LandingScreen