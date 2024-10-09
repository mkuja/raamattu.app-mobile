import {StatusBar, StyleSheet, View} from "react-native";
import TopBar from "../components/TopBar";
import BookList from "../components/BookList";
import {Button, MD3LightTheme as DefaultTheme} from "react-native-paper";
import themes from "../assets/themes.json";
import {useNavigation} from "@react-navigation/native";


const theme = {
    ...DefaultTheme,
    colors: themes.lightTheme
}


const LandingScreen = () => {
    const navigator = useNavigation()

    return (
        <View>
            <Button
                mode="contained"
                onPress={() => { navigator.navigate("Raamattuhaku ֍ Raamattu.app") }}
                style={style.searchButton}>Etsi Raamatusta painamalla tästä.</Button>
            <BookList/>
            <StatusBar style="auto"/>
        </View>
    )
}

const style = StyleSheet.create({
    searchButton: {
        borderRadius: 0,
        paddingVertical: 8,
        fontSize: 18
    }
})

export default LandingScreen