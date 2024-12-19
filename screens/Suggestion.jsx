import { Heading } from "@/components/ui/heading";
import { ScrollPage } from "@/components/Page";
import { InputText } from "@/components/widgets/InputText";
import { InputTextArea } from "@/components/widgets/InputTextArea";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";

export default function SuggestionPage() {
	const OnSubmit = () => {
		console.log("Submitted");
	};

	return (
		<ScrollPage className="h-full gap-6">
			<FormControl>
				<Heading size="3xl" className="mb-5">
					Suggestion Box!!
				</Heading>

				<VStack className="gap-5">
					<InputText placeholder="Name" type="text" />
					<InputText placeholder="Subject" type="text" />
					<InputTextArea placeholder="Description" />
					<Pressable onPress={OnSubmit} className="p-5 bg-primary-500">
						<Text className="text-typography-0">Submit</Text>
					</Pressable>
				</VStack>
			</FormControl>
		</ScrollPage>
	);
}
