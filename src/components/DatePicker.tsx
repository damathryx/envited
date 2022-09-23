import React from 'react';

import { useField, useFormikContext } from 'formik';
import { parseISO, set } from 'date-fns';
import ReactFlatpickr, {DateTimePickerProps} from 'react-flatpickr';

import './DatePicker.css';
import Input from './Input';

export type DatePickerProps = {
    value: Date;
    onChange: (dates: Date[]) => void;
    flatpickrProps?: DateTimePickerProps;
    error?: string
    label: string
    placeholder?: string
  };

const DatePicker = ({
  onChange,
  value,
  flatpickrProps,
  error,
  label,
  placeholder,
}: DatePickerProps): JSX.Element => {
  return (
    <ReactFlatpickr
      value={value}
      onChange={onChange}
      render={({ value }, ref) => (
        <Input
          ref={ref}
          value={String(value) || ''}
          placeholder={placeholder || '- Select -'}
          label={label}
          error={error}
        />
      )}
      {...flatpickrProps}
    />
  );
};

export type FormikDatePickerOmits = 'value' | 'onChange' | 'error';

export type FormikInputProps = Omit<
    DateTimePickerProps & DatePickerProps,
	FormikDatePickerOmits
> & {
	fieldName: string;
};

export const FormikDatePicker = ({ fieldName, ...props }: FormikInputProps) => {
	const [field, meta] = useField(fieldName);
  const formik = useFormikContext();
	return <DatePicker {...props} error={meta.error} 
              value={parseISO(field.value)}
            onChange={([date]) => {
              const sanitizedDate = set(date, { seconds: 0, milliseconds: 0 });
              formik.setFieldValue(fieldName, sanitizedDate.toISOString());
            }} />;
};

export default DatePicker