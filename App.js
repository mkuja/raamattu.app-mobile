import {
    PaperProvider,
} from "react-native-paper";
import Stack from "./navigation/Stack";


export default function App() {
    return (
        <PaperProvider>
            <Stack/>
        </PaperProvider>
    );
}

