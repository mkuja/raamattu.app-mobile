import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useContext, useEffect} from "react";
import {NavigationContext} from "../Context/NavigationContext";
import {useBibleBook} from "../hooks/useBible";

const ChapterList = () => {
    const navCtx = useContext(NavigationContext)
    const {data, error, loading} = useBibleBook(navCtx.selectedBook)
    const navigator = useNavigation()

    const renderItem = ({item, index, separators}) => {
        return (
            <TouchableHighlight
                key={index+1}
                onPress={() => {
                    navCtx.setSelectedChapter(index+1)
                    navigator.navigate("Luku ֍ Raamattu.app")
                }}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
            >

                <View style={style.items}>
                    <Text style={style.items}>{index+1}</Text>
                </View>

            </TouchableHighlight>
        )
    }

    return (
        data && !loading ? <FlatList
            data={Array.from({length: data.NumChapters}, (_, i) => i+1)}
            renderItem={renderItem} /> : <ActivityIndicator size="large" />
    )
}

const style = StyleSheet.create({
    items: {
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: "center"
    }
})

export default ChapterList