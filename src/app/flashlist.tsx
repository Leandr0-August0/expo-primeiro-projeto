import { FlashList } from "@shopify/flash-list";
import { TouchableOpacity, View, Text } from "react-native";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { router } from "expo-router";

const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=1000";

export default function FlatListExample() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	});

	return (
		<>
			{/* Voltar */}{" "}
			<TouchableOpacity
				style={{ padding: 10, marginTop: 10 }}
				onPress={() => router.back()}
			>
				<Text>Voltar</Text>
			</TouchableOpacity>
			<FlashList
				data={data}
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
					<Text numberOfLines={2}>
						{item.id}: {item.title}
					</Text>
				)}
			/>
		</>
	);
}
