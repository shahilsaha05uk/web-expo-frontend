import { View } from "react-native";
import { Heading } from "@/components/ui/heading";

export function Footer() {
	return (
		<View className="bg-black p-3">
			<Heading size="5xl" className="mb-3 color-white">
				Footer
			</Heading>
		</View>
	);
}
