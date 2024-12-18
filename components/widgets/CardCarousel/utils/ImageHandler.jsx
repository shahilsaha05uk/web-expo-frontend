import { ImageBlock } from "../ImageBlock";

export const CreateImageBlockArray = (count) => {
	const blocks = [];
	for (let i = 0; i < count; i++) {
		blocks.push(<ImageBlock key={i} />);
	}
	return blocks;
};
