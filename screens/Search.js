import {ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-paper";
import {useState, useMemo, useContext} from "react";
import {useSearch} from "../hooks/useBible";
import uuid from 'react-native-uuid'
import {useNavigation} from "@react-navigation/native";
import {NavigationContext} from "../Context/NavigationContext";

const Search = () => {
    const [search, setSearch] = useState(null)
    const [results, setResults] = useState([])

    const {error, loading} = useSearch(search, setResults)

    const navigator = useNavigation()
    const navCtx = useContext(NavigationContext)

    const renderedResults = useMemo(() => {
        if (!loading && results.Err === undefined) {
            return results.map(item => (
                <Pressable key={`${item.book}${item.chapter}${item.verse}${uuid.v4()}`}
                    onPress={() => {
                    navCtx.setSelectedBook(item.book)
                    navCtx.setSelectedChapter(item.chapter)
                    navigator.navigate("Luku ֍ Raamattu.app")
                }}>
                    <View style={style.entry}
                    >
                        <Text key={1} style={style.ref}>{item.book} {item.chapter}:{item.verse}</Text>
                        <Text key={2} style={style.verse}>{item.text}</Text>
                    </View>
                </Pressable>))
        } else if (loading) {
            return <View style={style.activityIndicator}>
                <ActivityIndicator size="large"/>
                <Text>Ladataan tuloksia...</Text>
            </View>
        } else if (search.length < 1) {
            return <View style={style.activityIndicator}>
                <ActivityIndicator size="large"/>
                <Text>Odotetaan syötettä...</Text>
            </View>
        }
    }, [results]);

    return (
        <View>
            <TextInput placeholder="Hakuteksti"
                       onChangeText={s => setSearch(s)}
            ></TextInput>
            <ScrollView>
                {renderedResults}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    ref: {
        fontSize: 12,
        fontStyle: "italic",
    },
    verse: {
        fontSize: 18,
        marginLeft: 26,
    },
    entry: {
        marginTop: 8
    },
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Search