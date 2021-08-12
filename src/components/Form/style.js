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
        paddingTop: 20,
    },
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 50,
        margin: 12,
        paddingLeft: 10,
    },
    // ..pertence ao botão
    button: {
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#0080ff",
        paddingTop: 14,
        paddingBottom: 14,
        // marginLeft: 12,
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
        width: "80%",
    },
    listData: {
        width: "100%",
        color: "black",
        height: 50,
        alignContent: "center",
        textAlign: "center",
    },
    listText1: {
        fontSize: 20,
        marginTop: 30,
    }
    // listView1: {
    //     alignContent: "left",
    //     textAlign: "left",
    // },
    // listView2: {
    //     marginTop:-19,
    //     alignContent: "right",
    //     textAlign: "right",
    // },
});

export default styles