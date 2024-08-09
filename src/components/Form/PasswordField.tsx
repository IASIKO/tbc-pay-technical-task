import Input from "../UI/Input";
import { UserSchema } from "../../schema/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../../types/form-types";
import Button from "../UI/Button";
import { useRouteStore } from "../../context/store";

const PasswordField = () => {
	const {
		register,
		formState: { errors },
		trigger,
	} = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});
	const { actions } = useRouteStore();

	const onNextButtonHandler = () => {
		trigger(["password", "confirmPassword"]);
		actions.changeRoute("email");
	};

	return (
		<>
			<Input
				type="text"
				placeholder="Password"
				name="password"
				register={register}
				error={errors.password}
			/>
			<Input
				type="text"
				placeholder="Confirm Password"
				name="confirmPassword"
				register={register}
				error={errors.confirmPassword}
			/>
			<div className="flex justify-between">
				<Button buttonType="button" onClick={() => actions.changeRoute("name")}>
					Back
				</Button>
				<Button buttonType="button" onClick={onNextButtonHandler}>
					Next
				</Button>
			</div>
		</>
	);
};

export default PasswordField;
