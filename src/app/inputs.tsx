import { StyleSheet, TextInput, View } from "react-native";

export default function Inputs() {
    return(
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Digite algo aqui..." keyboardType="phone-pad" />
                
                <TextInput style={styles.input} placeholder="Numero" keyboardType="number-pad" />
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 16
    },
    input: {
        width: '100%',
        height: 64,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 8,
        borderWidth: 1,

    }
})