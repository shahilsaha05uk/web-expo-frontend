import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";

function GetRandomImage() {
	const id = Math.floor(Math.random() * 20);
	return `https://picsum.photos/id/${id}/200/300`;
}

export const ImageBlock = (key) => {
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
