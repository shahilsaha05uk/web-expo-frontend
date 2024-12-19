import { ScrollView } from "react-native-virtualized-view";
import classNames from "classnames";
import { View } from "react-native";

export function ScrollPage({ children, classes, ...props }) {
	return (
		<ScrollView className={classes} {...props}>
			{children}
		</ScrollView>
	);
}

export function Page({ children, ...props }) {
	return (
		<View className="p-4 bg-background-0 flex-1" {...props}>
			{children}
		</View>
	);
}

export function ContentPage({ children, classes, ...props }) {
	return (
		<View
			className={classNames(
				"m-10 p-10 bg-background-0 border-solid border-2",
				classes
			)}
			{...props}
		>
			{children}
		</View>
	);
}
export function ScrollContentView({ children, classes, ...props }) {
	return (
		<View
			className={classNames(
				"m-10 p-10 bg-background-0 border-solid border-2",
				classes
			)}
			{...props}
		>
			<ScrollView>{children}</ScrollView>
		</View>
	);
}
