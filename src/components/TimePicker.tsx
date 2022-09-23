import React from 'react';

import { parseISO, set } from 'date-fns';
import ReactFlatpickr, {DateTimePickerProps} from 'react-flatpickr';
import { useField, useFormikContext } from 'formik';

import './DatePicker';
import Input from './Input';

export type TimePickerProps = {
    value: Date;
    onChange: (dates: Date[]) => void;
    flatpickrProps?: DateTimePickerProps;
    error?: string
    label?: string
    placeholder?: string
  };

const TimePicker = ({
  onChange,
  value,
  flatpickrProps,
  label,
  error,
  placeholder
}: TimePickerProps): JSX.Element => {
  return (
    <ReactFlatpickr
      value={value}
      onChange={onChange}
      options={{
        enableTime: true,
        noCalendar: true,
        minuteIncrement: 30,
      }}
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

export type FormikTimePickerOmits = 'value' | 'onChange' | 'error';

export type FormikInputProps = Omit<
    DateTimePickerProps & TimePickerProps,
	FormikTimePickerOmits
> & {
	fieldName: string;
};

export const FormikTimePicker = ({ fieldName, ...props }: FormikInputProps) => {
	const [field, meta] = useField(fieldName);
  const formik = useFormikContext();
	return <TimePicker {...props} error={meta.error} 
  value={parseISO(field.value)}
  onChange={([date]) => {
    const sanitizedDate = set(date, { seconds: 0, milliseconds: 0 });
    formik.setFieldValue(fieldName, sanitizedDate.toISOString());
  }} />;
};

export default TimePicker;
