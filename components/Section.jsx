import { View } from "react-native";
import classNames from "classnames";
import { Heading1 } from "./widgets/Headings";

export function Section({ title, classes, children }) {
	return (
		<View className={classes || classNames("py-3 px-4")}>
			<Heading1 value={title} className="mb-5" />
			{children}
		</View>
	);
}
