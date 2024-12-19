import { ScrollView } from "react-native-virtualized-view";
import { View } from "react-native";

export function ScrollPage({ children, classes, ...props }) {
	return (
		<ScrollView className={classes} {...props}>
			{children}
		</ScrollView>
	);
}

export function Page({ children, isScrollable, ...props }) {
	return (
		<View className="p-0 xl:p-4 bg-background-0 flex-1" {...props}>
			{children}
		</View>
	);
}
