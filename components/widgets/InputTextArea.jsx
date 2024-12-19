import { Textarea, TextareaInput } from "../ui/textarea";

export function InputTextArea({ placeholder, ...props }) {
	return (
		<Textarea variant="outline" size="xl" className="p-0" {...props}>
			<TextareaInput
				className="text-top align-top p-2"
				size="xl"
				placeholder={placeholder}
			/>
		</Textarea>
	);
}
