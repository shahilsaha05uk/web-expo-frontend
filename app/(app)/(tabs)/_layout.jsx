import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import "@/global.css";
import { TabButton } from "@/components/widgets/TabButton";
import { ScrollView } from "react-native-virtualized-view";
import { Platform, View } from "react-native";
import classNames from "classnames";
//import { Tabs } from "expo-router";

// "py-3 sm:py-6",
// 	"px-6 sm:px-8",
// 	"justify-end",
// 	"sm:gap-x-4 sm:shadow-sm",
// 	"bottom-safe-offset-2 sm:bottom-safe-offset-0",
// 	"rounded-full sm:rounded-none";

const Styles = {
	list: {
		justifyContent: "flex-end",
		paddingVertical: 20,
		paddingHorizontal: 30,
		gap: 10,
	},
};

const classes = classNames(
	"py-3 px-4", // paddings
	"web:justify-end"
);

const TabComponent = (
	<TabList className={classes}>
		<TabTrigger name="index" asChild href="/">
			<TabButton icon="home">Home</TabButton>
		</TabTrigger>
		<TabTrigger name="Suggestion" asChild href="/suggestion">
			<TabButton icon="feedback">Suggestion</TabButton>
		</TabTrigger>
		<TabTrigger name="About" asChild href="/about" reset="true">
			<TabButton icon="info">About</TabButton>
		</TabTrigger>
	</TabList>
);

const TabSlotStyle = () => {
	const platform = Platform.OS;

	if (platform === "web") {
		return (
			<ScrollView className="flex-1">
				<TabSlot />
			</ScrollView>
		);
	} else {
		return <TabSlot />;
	}
};

export default function TabLayout() {
	return (
		<View className="flex-1">
			<Tabs
				className="flex-1 lg:flex-col-reverse"
				screenOptions={{
					tabBarStyle: {
						height: "auto",
					},
					unmountOnBlur: true,
				}}
			>
				{TabSlotStyle()}
				{TabComponent}
			</Tabs>
		</View>
	);
}

// export default function TabLayout() {
// 	return (
// 		<Tabs>
// 			<Tabs.Screen name="index" />
// 			<Tabs.Screen name="about" />
// 			<Tabs.Screen name="suggestion" />
// 		</Tabs>
// 	);
// }

// <View className="flex-1">
// 	<Tabs
// 		className="flex-1 lg:flex-col-reverse"
// 		screenOptions={{
// 			tabBarStyle: {
// 				height: "auto",
// 			},
// 			unmountOnBlur: true,
// 		}}
// 	>
// 		<ScrollView className="flex-1">
// 			<TabSlot />
// 		</ScrollView>
// 		{TabComponent}
// 	</Tabs>
// </View>
