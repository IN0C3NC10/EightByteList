import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // ..pertence ao form
    formContext: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    form: {
        width: "100%",
        // altura recebe o valor de "auto" pois, conforme itens são adicionados o layout é preservado
        height: "auto",
    },
    // ..pertence aos campos
    label: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "#f6f6f6",
        borderRadius: 50,
        margin: 12,
        paddingLeft: 10,
    },
    // ..pertence ao botão
    button: {
        justifyContent: "center",
        width: "90%",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButton: {
        fontSize: 20,
        color: "white",
    },
    //..mensagem de erro
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    // ..estilos da lista
    listNames: {
        marginTop: 20,
    },
    listText1: {
        width: "100%",
        fontSize: 26,
        color: "red",
        height: 50,
        paddingRight: 20,
    },
    listText2: {
        fontSize: 16,
        color: "gray",
    },
});

export default styles