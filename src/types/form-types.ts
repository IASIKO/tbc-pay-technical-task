import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
	firstName: string;
	lastName: string;
	password: string;
	confirmPassword: string;
	email: string;
};

export type FormFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
};

export type ValidFieldNames =
	| "firstName"
	| "lastName"
	| "password"
	| "confirmPassword"
	| "email";