import { View } from "react-native";
import classNames from "classnames";
import { ScrollView } from "react-native-virtualized-view";

export function Page({ children, classes, ...props }) {
	return (
		<ScrollView
			className={classNames("flex-1 bg-background-200", classes)}
			contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
			{...props}
		>
			{children}
		</ScrollView>
	);
}

// <View
// 	className={classNames("flex-1 bg-background-200", classes)}
// 	{...props}
// >
// 	<ScrollView
// 		contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
// 		{...props}
// 	>
// 		{children}
// 	</ScrollView>
// </View>;

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
