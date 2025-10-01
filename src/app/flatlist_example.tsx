import { FlatList, TouchableOpacity, View, Text } from "react-native";
import Card from "../components/Card";
import { router } from "expo-router";

const LOCAL_DATA = [
	{ id: 1, title: "item 1", body: "Descrição item 1" },
	{ id: 2, title: "item 2", body: "Descrição item 2" },
	{ id: 3, title: "item 3", body: "Descrição item 3" },
	{ id: 4, title: "item 4", body: "Descrição item 4" },
	{ id: 5, title: "item 5", body: "Descrição item 5" },
	{ id: 6, title: "item 6", body: "Descrição item 6" },
	{ id: 7, title: "item 7", body: "Descrição item 7" },
	{ id: 8, title: "item 8", body: "Descrição item 8" },
	{ id: 9, title: "item 9", body: "Descrição item 9" },
	{ id: 10, title: "item 10", body: "Descrição item 10" },
	{ id: 11, title: "item 11", body: "Descrição item 11" },
	{ id: 12, title: "item 12", body: "Descrição item 12" },
	{ id: 13, title: "item 13", body: "Descrição item 13" },
	{ id: 14, title: "item 14", body: "Descrição item 14" },
	{ id: 15, title: "item 15", body: "Descrição item 15" },
	{ id: 16, title: "item 16", body: "Descrição item 16" },
	{ id: 17, title: "item 17", body: "Descrição item 17" },
	{ id: 18, title: "item 18", body: "Descrição item 18" },
	{ id: 19, title: "item 19", body: "Descrição item 19" },
	{ id: 20, title: "item 20", body: "Descrição item 20" },
	{ id: 21, title: "item 21", body: "Descrição item 21" },
	{ id: 22, title: "item 22", body: "Descrição item 22" },
	{ id: 23, title: "item 23", body: "Descrição item 23" },
	{ id: 24, title: "item 24", body: "Descrição item 24" },
	{ id: 25, title: "item 25", body: "Descrição item 25" },
	{ id: 26, title: "item 26", body: "Descrição item 26" },
	{ id: 27, title: "item 27", body: "Descrição item 27" },
	{ id: 28, title: "item 28", body: "Descrição item 28" },
	{ id: 29, title: "item 29", body: "Descrição item 29" },
	{ id: 30, title: "item 30", body: "Descrição item 30" },
	{ id: 31, title: "item 31", body: "Descrição item 31" },
	{ id: 32, title: "item 32", body: "Descrição item 32" },
	{ id: 33, title: "item 33", body: "Descrição item 33" },
	{ id: 34, title: "item 34", body: "Descrição item 34" },
	{ id: 35, title: "item 35", body: "Descrição item 35" },
];

export default function FlatListExample() {
	return (
		<>
			{/* Voltar */}
			<TouchableOpacity
				style={{ padding: 10, marginTop: 10 }}
				onPress={() => router.back()}
			>
				<Text>Voltar</Text>
			</TouchableOpacity>
			<FlatList
				data={LOCAL_DATA}
				keyExtractor={(item) => item.id.toString()}
				onViewableItemsChanged={({ viewableItems, changed }) => {
					console.log(
						"Itens visíveis",
						viewableItems.map((item) => item.key)
					);
					console.warn(
						"Itens alterados",
						changed.map((item) => item.key)
					);
				}}
				renderItem={({ item }) => (
					<View style={{ padding: 16 }}>
						<Card title={item.title} body={item.body} href={""} />
					</View>
				)}
			/>
		</>
	);
}
