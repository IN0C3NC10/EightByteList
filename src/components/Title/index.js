import React from "react";
import styles from "./style"
import  {View, Text} from "react-native";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitleSimple}><Text style={styles.textTitle}>EIGHT</Text>BYTE<Text style={styles.textTitle}>LIST</Text></Text>
        </View>
    )
}