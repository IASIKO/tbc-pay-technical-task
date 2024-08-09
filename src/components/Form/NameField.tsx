import Input from "../UI/Input";
import { UserSchema } from "../../schema/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../../types/form-types";
import Button from "../UI/Button";
import { useRouteStore } from "../../context/store";

const NameField = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});
	const { actions } = useRouteStore();

	const onNextButtonHandler = () => {
    trigger(["firstName", "lastName"]);
		actions.changeRoute("password");
	};

  

	return (
		<>
			<Input
				type="text"
				placeholder="First Name"
				name="firstName"
				register={register}
				error={errors.firstName}
			/>
			<Input
				type="text"
				placeholder="Last Name"
				name="lastName"
				register={register}
				error={errors.lastName}
			/>
			<div className="flex justify-between">
				<Button buttonType="button" onClick={() => actions.changeRoute("home")}>
					Back
				</Button>
				<Button buttonType="button" onClick={onNextButtonHandler}>
					Next
				</Button>
			</div>
		</>
	);
};

export default NameField;
