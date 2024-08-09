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
	const { handleSubmit } = useForm<FormData>({
		resolver: zodResolver(UserSchema),
	});
	const { route } = useRouteStore();

	const onSubmit = (data: FormData) => {
		console.log("SUCCESS", data);
	};

	return (
		<Card>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
				{route === "name" && <NameField />}
				{route === "password" && <PasswordField />}
				{route === "email" && <EmailField />}
			</form>
		</Card>
	);
};

export default Form;
