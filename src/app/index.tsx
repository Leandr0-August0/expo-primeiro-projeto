import { Image } from "expo-image"
//import * as WebBrowser from 'expo-web-browser';
import { Alert, Button, ScrollView, Text, View } from "react-native"
import Card from "../components/Card"

export default function Index() {
    return (
        /* JSX - HTML Javascript */
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16}}>

                <Image source="https://github.com/Leandr0-August0.png" style={{ width: 100, height: 100, borderRadius: 99}} />

                <Text style={{ fontSize: 32 }}>Hello World</Text>

                <Button title="Clique aqui" color={"#1d1d1d"} 
                onPress={ () => Alert.alert("Info", "Muito obrigado por clicar") } />

                {/* <Button title='Github' color={"#1d1d1d"} onPress={(e) => {
                    e.preventDefault();
    
                    WebBrowser.openBrowserAsync("https://github.com/i-davies");
                }
                }/> */}
                
                <Card title="Buttons" body="Tipos de Botões" href={"/buttons"}></Card>
                <Card title="Primeiro FlatList" body="FlatList example" href={"/flatlist_example"}></Card>
                <Card title="FlatList com fetch" body="FlatList fetch" href={"/flatlist_fetch"}></Card>
                <Card title="FlashList com fetch" body="FlashList fetch" href={"/flashlist"}></Card>
                <Card title="Inputs" body="Teste com inputs" href={"/inputs"}></Card>

            </View>
        </ScrollView>
    )
}