import {ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useContext, useEffect} from "react";
import {NavigationContext} from "../Context/NavigationContext";
import {useBibleBook} from "../hooks/useBible";
import TopBar from "./TopBar";

const ChapterList = () => {
    const navCtx = useContext(NavigationContext)
    const {data, error, loading} = useBibleBook(navCtx.selectedBook)
    const navigator = useNavigation()

    const renderItem = ({item, index, separators}) => {
        return (
            <TouchableHighlight
                key={index + 1}
                onPress={() => {
                    navCtx.setSelectedChapter(index + 1)
                    navigator.navigate("Luku ֍ Raamattu.app")
                }}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
                style={style.item}
            >

                <Text style={{textAlign: "center"}}>{index + 1}</Text>

            </TouchableHighlight>
        )
    }

    return (
        data && !loading ? (
            <>
                <TopBar pageName={navCtx.selectedBook}/>
                <FlatList numColumns={3}
                          scrollEnabled={true} focusable={true}
                          data={Array.from({length: data.NumChapters}, (_, i) => i + 1)}
                          renderItem={renderItem}/>
            </>
        ) : <ActivityIndicator size="large"/>
    )
}

const style = StyleSheet.create({
    item: {
        padding: 8,
        margin: 8,
        fontSize: 18,
        width: "30%",
        textAlign: "center"
    },
})

export default ChapterList