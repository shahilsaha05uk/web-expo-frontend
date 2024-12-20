import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import "@/global.css";
import { TabButton } from "@/components/widgets/TabButton";
import { ScrollView } from "react-native-virtualized-view";
import { View } from "react-native";
import classNames from "classnames";

const TabComponent = (
	<TabList
		className={classNames(
			"py-3 sm:py-6",
			"px-6 sm:px-8",
			"justify-end",
			"sm:gap-x-4 sm:shadow-sm",
			"bottom-safe-offset-2 sm:bottom-safe-offset-0",
			"rounded-full sm:rounded-none"
		)}
	>
		<TabTrigger name="index" asChild href="/">
			<TabButton icon="home">Home</TabButton>
		</TabTrigger>
		<TabTrigger name="suggestion" asChild href="/suggestion">
			<TabButton>Suggestion</TabButton>
		</TabTrigger>
		<TabTrigger name="about" asChild href="/about">
			<TabButton>About</TabButton>
		</TabTrigger>
	</TabList>
);

export default function TabLayout() {
	return (
		<View className="flex-1">
			<Tabs
				className="flex-1 lg:flex-col-reverse"
				screenOptions={{
					tabBarStyle: {
						height: "auto",
					},
				}}
			>
				<ScrollView className="flex-1">
					<TabSlot />
				</ScrollView>
				{TabComponent}
			</Tabs>
		</View>
	);
	// return <Stack></Stack>;
}
