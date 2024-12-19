import { View } from "react-native";
import { Heading } from "@/components/ui/heading";
import classNames from "classnames";
import { Heading1 } from "./widgets/Headings";

export function Section({ title, classes, children }) {
	return (
		<View className={classNames("py-5", classes)}>
			{/* <Heading size="3xl" className="mb-2">
				{title}
			</Heading> */}
			<Heading1 value={title} />
			{children}
		</View>
	);
}

{
	/* <Heading size="3xl" className="mb-2">
				{title}
			</Heading> */
}
