import Button from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { Text } from "components/atoms/Text";
import Box from "components/layout/Box";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type SigninFormData = {
	username: string;
	password: string;
};

interface Props {
	onSignin?: (username: string, password: string) => void;
}

export const SigninForm: FC<Props> = ({ onSignin }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SigninFormData>();
	const onSubmit = (data: SigninFormData) => {
		const { username, password } = data;
		onSignin?.(username, password);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box marginBottom={1}>
				<Input
					{...register("username", { required: true })}
					name="username"
					type="text"
					placeholder="ユーザ名"
					hasError={!!errors.username}
				/>
				{errors.username && (
					<Text color="danger" variant="small" paddingLeft={1}>
						ユーザー名は必須です
					</Text>
				)}
			</Box>
			<Box marginBottom={2}>
				<Input
					{...register("password", { required: true })}
					name="password"
					type="password"
					placeholder="パスワード"
					hasError={!!errors.password}
				/>
				{errors.password && (
					<Text color="danger" variant="small" paddingLeft={1}>
						パスワードは必須です
					</Text>
				)}
			</Box>
			<Button width="100%" type="submit">
				サインイン
			</Button>
		</form>
	);
};

// export default SigninForm;
