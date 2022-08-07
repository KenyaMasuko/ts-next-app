import { ComponentMeta } from "@storybook/react";
import Button from "components/atoms/Button";
import {
	GlobalSpinnerContextProvider,
	useGlobalSpinnerActionsContext,
} from "contexts/GlobalSpinnerContext";
import { GlobalSpinner } from ".";

export default {
	title: "Organisms/GlobalSpinner",
} as ComponentMeta<typeof GlobalSpinner>;

export const WithContextProvider = () => {
	const ChildComponent = () => {
		const setGlobalSpinner = useGlobalSpinnerActionsContext();
		const handleClick = () => {
			setGlobalSpinner(true);
			setTimeout(() => {
				setGlobalSpinner(false);
			}, 5000);
		};
		return (
			<>
				<GlobalSpinner />
				<Button onClick={handleClick}>スピナーを表示</Button>
			</>
		);
	};

	return (
		<GlobalSpinnerContextProvider>
			<ChildComponent />
		</GlobalSpinnerContextProvider>
	);
};
