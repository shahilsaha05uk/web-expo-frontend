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
