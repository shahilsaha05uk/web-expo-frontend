import { View } from "react-native";
import { Heading } from "@/components/ui/heading";

export function Footer() {
	return (
		<View className="bg-gray-900 p-3">
			<Heading size="5xl" className="mb-3 color-white">
				Footer
			</Heading>
		</View>
	);
}
