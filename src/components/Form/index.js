import React, { useState } from "react";
import styles from "./style"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";

export default function Form() {
    //..PARTE RESPONSÁVEL PELA ALTERAÇÃO DO STATUS DA APLICAÇÃO
    //..seta o nome como nulo
    const [name, setName] = useState(null)
    //..seta a mensagem
    const [textButton, setTextButton] = useState("Cadastrar")
    const [errorMessage, setErrorMessage] = useState(null)
    //..state relacionado a lista
    const [nameList, setNameList] = useState([{id:new Date().getTime(),name:"Boerzera Almeida"}])

    // função responsável pela validação simples dos campos
    function validationName() {
        if (name == "" || name == null) {
            //..se entrar no if, seta os valores default
            setTextButton("Registrar")
            //..lembrando que a mensagem não é específica
            setErrorMessage("Campo Obrigatório!*")
            Vibration.vibrate();
        } else if (name != null && name != "") {
            //..se der bom
            setNameList((arr) => [...arr, { id: new Date().getTime(), name: name }])
            setTextButton("Registrar Novamente")
            setName("")
            setErrorMessage(null)
        } else {
            //..se der cagada em tudo
            setName(null)
            setTextButton("Registrar")
        }
    }

    

    return (
        <View style={styles.formContext}>
            <Pressable style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput onChangeText={setName} value={name} placeholder="Ex. Alex Trombogosi" keyboardType="default" style={styles.input} />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity onPress={() => validationName()} style={styles.button}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            <FlatList style={styles.listNames}
                // habilita, ou não a barra de rolagem
                showsVerticalScrollIndicator={false}
                // inverte a lista p/ mostrar o resultado recem feito primeiro
                data={nameList.reverse()}
                // ..para cada item o conteúdo é exibido, semelhante ao 'while'
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.listText}>{item.name}</Text>
                    )
                }}
                // ..p/ cada item é necessário usar uma chave única, neste caso o 'id'
                keyExtractor={(item) => { item.id }}
            />
        </View>
    )
}