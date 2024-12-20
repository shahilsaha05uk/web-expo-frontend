import { InputText } from "@/components/widgets/InputText";
import { InputTextArea } from "@/components/widgets/InputTextArea";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { FormControl } from "@/components/ui/form-control";
import { ContentBlock } from "@/components/Containers";
import { Page } from "@/components/Page";
import { Section } from "@/components/Section";
export default function SuggestionPage() {
	const OnSubmit = () => {
		console.log("Submitted");
	};

	return (
		<Page>
			<Section>
				<ContentBlock title="Suggestion Box!!">
					<FormControl className="gap-5">
						<InputText placeholder="Name" type="text" />
						<InputText placeholder="Subject" type="text" />
						<InputTextArea placeholder="Description" />
						<Pressable onPress={OnSubmit} className="p-5 bg-primary-500">
							<Text className="text-typography-0">Submit</Text>
						</Pressable>
					</FormControl>
				</ContentBlock>
			</Section>
		</Page>
	);
}
