import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from "../screens/LandingScreen";
import Chapters from "../screens/Chapters";
import {NavigationContext} from "../Context/NavigationContext";
import {createContext, useContext, useState} from "react";
import Chapter from "../screens/Chapter";


function Stack() {
    const myStack = createStackNavigator();

    const ctx = NavigationContext
    const [selectedBook, setSelectedBook] = useState(null)
    const [selectedChapter, setSelectedChapter] = useState(null)

    return (
        <ctx.Provider value={{
            selectedBook, setSelectedBook,
            selectedChapter, setSelectedChapter,
            navigator: myStack
        }}>
            <NavigationContainer>
                <myStack.Navigator initialRouteName="Kirjat ֍ Raamattu.app">
                    <myStack.Screen name="Kirjat ֍ Raamattu.app" component={LandingScreen}/>
                    <myStack.Screen name={`Luvut ֍ Raamattu.app`} component={Chapters}/>
                    <myStack.Screen name={`Luku ֍ Raamattu.app`} component={Chapter}/>
                </myStack.Navigator>
            </NavigationContainer>
        </ctx.Provider>
    );
}

export default Stack