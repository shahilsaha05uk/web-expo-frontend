import { Heading } from "@/components/ui/heading";

export function Heading1({ value }) {
	return (
		<Heading size="3xl" className="mb-3 underline underline-offset-8">
			{value}
		</Heading>
	);
}
export function Heading2({ value }) {
	return (
		<Heading size="2xl" className="mb-3 md:mb-7">
			{value}
		</Heading>
	);
}
