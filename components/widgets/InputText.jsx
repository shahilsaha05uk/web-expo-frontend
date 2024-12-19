import { Input, InputField } from "@/components/ui/input";

export function InputText({ placeholder, type, isRequired, ...props }) {
	return (
		<Input
			variant="outline"
			size="xl"
			className="w-full "
			isRequired={isRequired}
			{...props}
		>
			<InputField type={type} placeholder={placeholder} />
		</Input>
	);
}
