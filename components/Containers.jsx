import classNames from "classnames";
import { View } from "react-native";
import { Text } from "./ui/text";
import { ScrollView } from "react-native-virtualized-view";
import { Heading2 } from "./widgets/Headings";

export function TextContentBlock({
	content,
	textStyles,
	blockStyles,
	children,
	...props
}) {
	return (
		<View className={blockStyles} {...props}>
			{children}
			<Text className={classNames("text-typography-0", textStyles)}>
				{content}
			</Text>
		</View>
	);
}

export function ContentBlock({ children, title, classes, ...props }) {
	return (
		<View
			className={classNames("p-2 md:p-10 my-5 lg:my-auto", classes)}
			{...props}
		>
			{title && <Heading2 value={title} />}
			{children}
		</View>
	);
}
