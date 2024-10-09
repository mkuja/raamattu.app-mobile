import {useBibleBooks} from "../hooks/useBible";
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {useContext} from "react";
import {NavigationContext} from "../Context/NavigationContext";
import {useNavigation} from "@react-navigation/native";

const BookList = (books) => {
    const {data, loading, error} = useBibleBooks()
    const navCtx = useContext(NavigationContext)
    const navigator = useNavigation()

    const renderItem = ({item, index, separators}) => {

        return (
            <TouchableHighlight
                key={item.book_number}
                onPress={() => {
                    navCtx.setSelectedBook(item.short_name)
                    console.log(navCtx)
                    navigator.navigate("Luvut ֍ Raamattu.app")
                }}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={{...style.items, backgroundColor: item.book_color}}>
                    <Text style={style.items}>{item.long_name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    if (error) {
        return <Text>Error happened</Text>
    } else if (loading) {
        return (
            <ActivityIndicator size="large"/>
        )
    } else {
        return (
            <FlatList data={data} renderItem={renderItem}/>
        )
    }
}

const style = StyleSheet.create({
    items: {
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: "center"
    }
})

export default BookList