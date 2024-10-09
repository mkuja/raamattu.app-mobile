import * as React from "react";
import {Appbar} from "react-native-paper";

const TopBar = ({theme, pageName}) => {
    return (
        <Appbar.Header theme={theme} mode="small">
            <Appbar.Content title={`${pageName}`} theme={theme} />
        </Appbar.Header>
    )
}

export default TopBar