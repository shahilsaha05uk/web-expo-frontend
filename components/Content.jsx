import { FlatGrid } from "react-native-super-grid";
import { Services } from "../test/SampleServices";
import { ServiceCard } from "./widgets/ServiceCard";

export function Content({ style, contentContainerStyle, ...props }) {
	return (
		<FlatGrid
			keyExtractor={(item) => item.serviceId}
			data={Services}
			itemDimension={300}
			spacing={10}
			renderItem={({ item }) => <ServiceCard details={item} />}
			{...props}
		/>
	);
}
