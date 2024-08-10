import { useForm } from "react-hook-form";
import { useRouteStore } from "../../context/store";
import EmailField from "./EmailField";
import NameField from "./NameField";
import PasswordField from "./PasswordField";
import { FormData } from "../../types/form-types";
import Card from "../UI/Card";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../schema/schema";
import SuccessMessage from "../SuccessMessage";

const Form = () => {
	const { handleSubmit, register, trigger, formState, getValues } =
		useForm<FormData>({
			resolver: zodResolver(UserSchema),
		});
	const { route, actions } = useRouteStore();

	const onSubmit = (data: FormData) => {
		if (data) {
			actions.changeRoute("success");
		}
	};

	const userData = getValues([
		"firstName",
		"lastName",
		"email",
		"password",
		"confirmPassword",
	]);

	return (
		<Card>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 p-4 w-80"
			>
				{route === "name" && (
					<NameField
						register={register}
						trigger={trigger}
						formState={formState}
					/>
				)}
				{route === "password" && (
					<PasswordField
						register={register}
						trigger={trigger}
						formState={formState}
					/>
				)}
				{route === "email" && (
					<EmailField register={register} formState={formState} />
				)}
			</form>
			{route === "success" && <SuccessMessage userData={userData} />}
		</Card>
	);
};

export default Form;
