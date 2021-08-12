import React, { useState } from "react";
import styles from "./style"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, FlatList } from "react-native";

export default function List(props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <FlatList style={styles.listNames}
                // habilita, ou não a barra de rolagem
                showsVerticalScrollIndicator={true}
                // inverte a lista p/ mostrar o resultado recem feito primeiro
                data={props}
                // ..para cada item o conteúdo é exibido, semelhante ao 'while'
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listData}>
                            <View>
                                <Text style={styles.listText1}>{item.props.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.listText}>{item.props.list.email}</Text>
                            </View>
                        </View>
                    )
                }}
                // ..p/ cada item é necessário usar uma chave única, neste caso o 'id'
                keyExtractor={(item) => { item.props.id }}
            />
        </View>
    )
}