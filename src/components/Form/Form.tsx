import { useForm } from "react-hook-form";
import { useRouteStore } from "../../context/store";
import EmailField from "./Fields/EmailField";
import NameField from "./Fields/NameField";
import PasswordField from "./Fields/PasswordField";
import { FormData } from "../../types/form-types";
import Card from "../UI/Card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../schema/schema";
import SuccessMessage from "../SuccessMessage";
import Button from "../UI/Button";
import { useFormHook } from "./hook";

const Form = () => {
	const { handleSubmit, register, trigger, formState, watch } =
		useForm<FormData>({
			resolver: zodResolver(FormSchema),
		});
	const { route, actions } = useRouteStore();
	console.log("🚀 ~ Form ~ route:", route)

	const onNextButtonHandler = useFormHook(trigger)

	const onSubmit = (data: FormData) => {
		if (data) {
			actions.changeRoute("success");
		}
	};

	return (
		<Card>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 p-4 w-80"
			>
				{route === "name" && (
					<NameField
						register={register}
						formState={formState}
					/>
				)}
				{route === "password" && (
					<PasswordField
						register={register}
						formState={formState}
					/>
				)}
				{route === "email" && (
					<EmailField register={register} formState={formState} />
				)}
				{route !== 'success' && <div className="flex justify-between">
					<Button
						buttonType="button"
						onClick={() => actions.changeRoute("home")}
					>
						Back
					</Button>
					<Button
						buttonType={route === "email" ? "submit" : "button"}
						onClick={onNextButtonHandler}
					>
						{route === "email" ? "Submit" : "Next"}
					</Button>
				</div>}
			</form>
			{route === "success" && <SuccessMessage watch={watch} />}
		</Card>
	);
};

export default Form;
