import { View } from "react-native";
import classNames from "classnames";

export function Page({ children, classes, ...props }) {
	return (
		<View className={classNames("p-0 xl:p-4", classes)} {...props}>
			{children}
		</View>
	);
}
