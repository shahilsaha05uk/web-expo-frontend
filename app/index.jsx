import {
  Button,
  ButtonText,
} from '@/components/ui/button';
import { Text, View } from "react-native";

export default function App() {
	return (
		<View>
      <Text className={"text-4xl text-red-500 font-bold m-8"}>Hello World</Text>
      <Button className='bg-error-500'>
        <ButtonText>Press me</ButtonText>
      </Button>
		</View>
	);
}