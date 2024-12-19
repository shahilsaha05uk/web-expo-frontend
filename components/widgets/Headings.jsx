import { Heading } from "@/components/ui/heading";
import classNames from "classnames";

export function Heading1({ value, textStyles }) {
	return (
		<Heading
			size="3xl"
			className={classNames("mb-3 underline underline-offset-8", textStyles)}
		>
			{value}
		</Heading>
	);
}
export function Heading2({ value, textStyles }) {
	return (
		<Heading size="2xl" className={classNames("mb-3 md:mb-7", textStyles)}>
			{value}
		</Heading>
	);
}
