import {useBibleBook} from "../hooks/useBible";
import {useContext} from "react";
import {NavigationContext} from "../Context/NavigationContext";
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from "react-native";
import TopBar from "./TopBar";

const VerseList = () => {
    const navCtx = useContext(NavigationContext)
    const {data, error, loading} = useBibleBook(navCtx.selectedBook, navCtx.selectedChapter)
    return (
        !loading && data ? <ScrollView focusable={true} style={style.column}>
            <TopBar pageName={`${navCtx.selectedBook} ${navCtx.selectedChapter}`} />{data.Verses.map((val, ndx) => (
                <View style={style.row} key={ndx}>
                    <View style={style.verseNum}>
                        <Text>{val.num}</Text>
                    </View>
                    <View style={style.verse}>
                        <Text>{val.text}</Text>
                    </View>
                </View>
            ))}</ScrollView>
            : <ActivityIndicator size="large"/>
    )
}

const style = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: "column"
    },
    row: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 8,
        padding: 8
    },
    verseNum: {
        flex: 0,
        fontSize: 12
    },
    verse: {
        flex: 0,
        fontSize: 22,
        paddingLeft: 8,
        paddingRight: 8,
    }
})

export default VerseList