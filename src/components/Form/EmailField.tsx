import Input from "../UI/Input";
import { UserSchema } from "../../schema/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "../../types/form-types";
import Button from "../UI/Button";
import { useRouteStore } from "../../context/store";

const EmailField = () => {
	const {
		register,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});

	const { actions } = useRouteStore();

	return (
		<>
			<Input
				type="email"
				placeholder="Email"
				name="email"
				register={register}
				error={errors.email}
			/>
			<div className="flex justify-between">
				<Button
					buttonType="button"
					onClick={() => actions.changeRoute("password")}
				>
					Back
				</Button>
				<Button buttonType="submit">Submit</Button>
			</div>
		</>
	);
};

export default EmailField;
