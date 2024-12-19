import { View } from "react-native";
import { Heading } from "@/components/ui/heading";

export function Banner() {
	return (
		<View className="bg-background-900 p-3">
			<Heading size="3xl" className="my-96 color-white">
				This is the banner
			</Heading>
		</View>
	);
}
