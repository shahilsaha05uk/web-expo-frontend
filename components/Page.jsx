import { Platform, View } from "react-native";
import classNames from "classnames";
import { ScrollView } from "react-native-virtualized-view";

export function EmptyContainer({ children }) {
	return <View>{children}</View>;
}

export function Page({ children, classes, ...props }) {
	return (
		<View
			className={classNames("flex-1 bg-background-200", classes)}
			{...props}
		>
			<ScrollView className="grow" {...props}>
				{children}
			</ScrollView>
		</View>
	);
}
{
	/* <View
			className={classNames("flex-1 bg-background-200", classes)}
			{...props}
		>
			<ScrollView
				className="flex-1"
				contentContainerStyle={{ flexGrow: 1 }}
				{...props}
			>
				{children}
			</ScrollView>
		</View> */
}
