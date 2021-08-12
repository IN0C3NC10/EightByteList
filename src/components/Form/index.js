import React, { useState } from "react";
import styles from "./style"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, FlatList } from "react-native";

export default function Form() {
    //..PARTE RESPONSÁVEL PELA ALTERAÇÃO DO STATUS DA APLICAÇÃO
    //..seta os items como nulo
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [errorMessageName, setErrorMessageName] = useState(null)
    const [errorMessageEmail, setErrorMessageEmail] = useState(null)
    //..state relacionado a lista
    const [nameList, setNameList] = useState([
        { id: new Date().getTime(), name: "Boerzera Almeida", email: "boer@hotmail.com" },
        { id: new Date().getTime(), name: "Alex Tromboghosi", email: "alex@hotmail.com" },
        { id: new Date().getTime(), name: "Caramujo Banguelo", email: "cara@hotmail.com" },
        { id: new Date().getTime(), name: "Tomizio Xeraasaka", email: "tomaz@hotmail.com" },
        { id: new Date().getTime(), name: "Biriba Butinga", email: "biriba@hotmail.com" },
    ])

    //..função responsável pela validação simples dos campos
    function validationName() {
        setErrorMessageName(null)
        setErrorMessageEmail(null)
        if (name == "" || name == null) {
            //..se entrar no if, seta os valores default
            setErrorMessageName("Campo Obrigatório!*")
            Vibration.vibrate();
        } else if (email == "" || email == null) {
            //..se entrar no if, seta os valores default
            setErrorMessageEmail("Campo Obrigatório!*")
            Vibration.vibrate();
        } else if (name != null && name != "" && email != null && email != "") {
            //..se der bom
            if (checks()) {
                //..realiza as demais validações
                let emailFormated = email.toLowerCase()
                setNameList((arr) => [...arr, { id: new Date().getTime(), name: name, email: emailFormated }])
                setName("")
                setEmail("")
                setErrorMessageName(null)
                setErrorMessageEmail(null)
            } else {
                setErrorMessageEmail("Digite um email válido!")
            }
        } else {
            //..se der cagada em tudo
            setName(null)
            setEmail(null)
            Vibration.vibrate();
        }
    }
    //..função responsável pela validação simples do email
    function checks() {
        if (email.includes("@") && email.includes("."))
            return true
        else
            return false
    }

    return (
        <View style={styles.formContext}>
            <Pressable style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput onChangeText={setName} value={name} placeholder="Ex. Alex Trombogosi" keyboardType="default" style={styles.input} />
                <Text style={styles.errorMessage}>{errorMessageName}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput onChangeText={setEmail} value={email} placeholder="Ex. trombogosi@outlook.com" keyboardType="default" style={styles.input} />
                <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
                <TouchableOpacity onPress={() => validationName()} style={styles.button}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </Pressable>
            <FlatList style={styles.listNames}
                // habilita, ou não a barra de rolagem
                showsVerticalScrollIndicator={true}
                // inverte a lista p/ mostrar o resultado recem feito primeiro
                data={nameList}
                // ..para cada item o conteúdo é exibido, semelhante ao 'while'
                renderItem={({ item }) => {
                    return (
                        <View style={styles.listData}>
                            <View>
                                <Text style={styles.listText1}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.listText}>{item.email}</Text>
                            </View>
                        </View>
                    )
                }}
                // ..p/ cada item é necessário usar uma chave única, neste caso o 'id'
                keyExtractor={(item) => { item.id }}
            />
        </View>
    )
}