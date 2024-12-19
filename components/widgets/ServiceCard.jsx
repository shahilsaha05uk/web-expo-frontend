import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { GetRandomImage } from "./CardCarousel/utils/imgHelper";
import { Link, LinkText } from "@/components/ui/link";

export function ServiceCard({ details }) {
	const imgSrc = GetRandomImage();
	return (
		<Card size="md" variant="elevated" className="flex-1 shadow bg-slate-200">
			<Image
				className="w-full h-64 rounded-md m-0"
				source={imgSrc}
				alt="random"
				resizeMode="cover"
			/>
			<Box className="p-2">
				<Heading size="md" className="mb-1">
					{details.serviceName}
				</Heading>
				<Text size="sm" className="mb-3">
					{details.serviceDescription}
				</Text>

				<Link href="https://gluestack.io/">
					<LinkText size="lg">See Details</LinkText>
				</Link>
			</Box>
		</Card>
	);
}
