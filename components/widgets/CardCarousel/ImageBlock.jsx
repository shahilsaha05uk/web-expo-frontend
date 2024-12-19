import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { GetRandomImage } from "./utils/imgHelper";

export const ImageBlock = (key, src) => {
	const imgSrc = GetRandomImage();
	return (
		<Card size="md" variant="elevated" className="p-1">
			<Image
				className="w-full h-64 rounded-md m-0"
				source={imgSrc}
				alt="random"
				resizeMode="cover"
			/>
			<Box className="p-2">
				<Heading size="md" className="mb-1">
					Quick Start
				</Heading>
				<Text size="sm">Start building your next project in minutes</Text>
			</Box>
		</Card>
	);
};
