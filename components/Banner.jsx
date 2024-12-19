import { View } from "react-native";
import { Image } from "./ui/image";

const source =
	"https://media.istockphoto.com/id/1457385092/photo/an-asian-young-technician-service-man-wearing-blue-uniform-checking-cleaning-air-conditioner.jpg?s=612x612&w=0&k=20&c=Tqu5jMzD1TKFO1Fvow6d0JMDsEGU8T3kToP706bQFQI=";

export function Banner() {
	return (
		<View className="h-[600px]">
			<Image source={source} size="2xl" className="w-full h-full" />
		</View>
	);
}
