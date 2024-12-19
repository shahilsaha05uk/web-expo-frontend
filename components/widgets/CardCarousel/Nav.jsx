import { Pressable } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Center } from "../Center";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

export const NavLeft = ({ disabled, onPress }) => {
	return (
		<CreateNav
			disabled={disabled}
			icon={ChevronLeft}
			onPress={onPress}
			centerClasses="left-0"
			buttonClasses={"ml-3 md:-ml-[10px]"}
		/>
	);
};
export const NavRight = ({ disabled, onPress }) => {
	return (
		<CreateNav
			disabled={disabled}
			icon={ChevronRight}
			onPress={onPress}
			centerClasses="right-0"
			buttonClasses={"mr-3 md:-mr-[10px]"}
		/>
	);
};

const CreateNav = ({
	disabled,
	icon,
	onPress,
	centerClasses,
	buttonClasses,
}) => {
	const colorMode = "light";

	const centerClassNames = `absolute h-full hidden md:flex ${centerClasses}`;
	const buttonClassNames = `p-1 rounded-full border-outline-300 border bg-background-50 hover:bg-background-100 ${
		disabled ? "opacity-0" : "opacity-100"
	} ${buttonClasses}`;

	return (
		<Center className={centerClassNames}>
			<Pressable
				className={buttonClassNames}
				onPress={onPress}
				disabled={disabled}
			>
				<Icon
					as={icon}
					size="lg"
					color={colorMode === "light" ? "#535252" : "#DCDBDB"}
				/>
			</Pressable>
		</Center>
	);
};
