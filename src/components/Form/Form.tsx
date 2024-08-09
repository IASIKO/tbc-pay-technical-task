import { useForm } from "react-hook-form";
import { useRouteStore } from "../../context/store";
import EmailField from "./EmailField";
import NameField from "./NameField";
import PasswordField from "./PasswordField";
import { FormData } from "../../types/form-types";
import Card from "../UI/Card";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../schema/schema";

const Form = () => {
	const { handleSubmit, register, trigger, formState } = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});
	const { route } = useRouteStore();

	const onSubmit = (data: FormData) => {
		console.log("SUCCESS", data);
	};

	return (
		<Card>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
		</Card>
	);
};

export default Form;
