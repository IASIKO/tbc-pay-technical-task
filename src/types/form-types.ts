import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
	name: { firstName: string; lastName: string };
	password: { password: string; confirmPassword: string };
	email: { email: string };
};

export type FormFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
};

export type ValidFieldNames =
	| "name.firstName"
	| "name.lastName"
	| "password.password"
	| "password.confirmPassword"
	| "email.email";
