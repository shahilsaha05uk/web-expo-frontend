import React from "react";
import { View } from "react-native";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

const baseStyle = isWeb ? "flex flex-col relative z-0" : "";

const centerStyle = tva({
	base: `justify-center items-center ${baseStyle}`,
});

const Center = React.forwardRef((props, ref) => {
	const { className, ...restProps } = props;

	return (
		<View
			className={centerStyle({ class: className })}
			{...restProps}
			ref={ref}
		/>
	);
});

Center.displayName = "Center";

export { Center };
