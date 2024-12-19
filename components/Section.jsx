import { View } from "react-native";
import { Heading } from "@/components/ui/heading";

export function Section({ title, children }) {
	return (
		<View className="mb-5 mt-4 p-2">
			<View className="mb-3">
				<Heading size="3xl" className="">
					{title}
				</Heading>
			</View>

			{children}
		</View>
	);
}
