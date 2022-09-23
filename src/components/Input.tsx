import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { useField } from 'formik';

export type InputProps = {
	error?: string;
	className?: string;
	containerClassName?: string;
	label?: string;
};

const Input = React.forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement> & InputProps
>((props, ref) => {
	const { className = '', containerClassName, label, error, ...rest } = props;

	return (
		<div className={clsx(containerClassName, 'mt-2 flex w-full flex-col')}>
			{label ? <span className="block mb-2 text-sm font-medium text-gray-900">{label}</span> : null}
			<input
				ref={ref}
				className={clsx(
					className,
					error ? 'border-red-500' : '',
					'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
				)}
				{...rest}
			/>
			<span className="mt-1 text-red-500 text-xs font-light">{error || ''}</span>
		</div>
	);
});

Input.displayName = 'Input';

export type FormikInputOmits = 'value' | 'onChange' | 'error';

export type FormikInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement> & InputProps,
	FormikInputOmits
> & {
	fieldName: string;
};

export const FormikInput = ({ fieldName, ...props }: FormikInputProps) => {
	const [field, meta] = useField(fieldName);
	return <Input {...props} error={meta.error} {...field} />;
};

export default Input;