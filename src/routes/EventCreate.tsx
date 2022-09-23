import React from 'react'
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { FormikInput } from '../components/Input';
import { FormikDatePicker } from '../components/DatePicker';
import { FormikTimePicker } from '../components/TimePicker';

export type FormProps = Partial<{
	eventName: string;
    hostName: string;
	startDate: string;
	endDate: string;
    location: string;
    photo: string;
}>;

const validationSchema = Yup.object().shape({
	eventName: Yup.string().required('Please enter event name.'),
	hostName: Yup.string().required('Please enter host name.'),
    // Implement check if startDate is before endDate
	startDate: Yup.string().required('Please provide the start date.'),
	endDate: Yup.string().required('Please provide the end date.'),
	location: Yup.string().required('Please provide the location.'),
	photo: Yup.string().required('Please provide the photo url.')
});

const EventCreate = () => {
	const navigate = useNavigate();
    const onSubmit = (val: FormProps) => {
        navigate('/event', {
            state: val
        });
    }
    return (
		<div className="flex flex-col p-4 max-w-md mx-auto mt-3 md:mt-10">
        <h1 className='text-primaryPurpleDark font-bold text-center text-[36px] leading-[36px] md:text-[64px] md:leading-[64px]'>
            Create Event
        </h1>
			<div className="mt-4 w-full">
				<Formik<FormProps>
					initialValues={{}}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
                        <Form className="flex flex-col w-full max-w-400">
                            <FormikInput fieldName="eventName" label="Event Name" placeholder="Enter Event Name"/>
                            <FormikInput fieldName="hostName" label="Host Name" placeholder="Enter Host Name" />
                            <div className='flex flex-row items-end gap-2'>
                                <FormikDatePicker fieldName="startDate" label="Start Date" placeholder="Enter Start Date" />
                                <FormikTimePicker fieldName="startDate" placeholder="Enter Start Time" />
                            </div>
                            <div className='flex flex-row items-end gap-2'>
                                <FormikDatePicker fieldName="endDate" label="End Date" placeholder="Enter End Date" />
                                <FormikTimePicker fieldName="endDate" placeholder="Enter End Time" />
                            </div>
                            {/* Implement dropzone UploadInput below */}
                            <FormikInput fieldName="location" label="Location" placeholder="Enter the event location." />
                            <FormikInput fieldName="photo" label="Photo URL" placeholder="Enter photo url" />
                            <button type="submit" className='flex mt-5 self-center items-center justify-center rounded-lg gradient text-center w-[187px] h-[50px] md:w-[320px] md:h-[55px]'>
                                <span className='text-white font-bold text-[16px] md:text-[20px] leading-[16px] md:leading-[23px]'>
                                    Save
                                </span>
                            </button>
                        </Form>
				</Formik>
			</div>
		</div>
    )
}

// const UploadInput = ({ setFieldValue }: { setFieldValue: (field: string, value: any) => void }) => {
//     const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
//         accept: {
//             'image/png': ['.png'],
//             'image/jpeg': ['.jpg', '.jpeg'],
//         },
//     });

//     useEffect(() => {
//     }, [acceptedFiles])
//     return (
//       <div>
//         {}
//         <div {...getRootProps({ className: "dropzone" })}>
//             <Input label="Photo" placeholder="Add Photo" {...getInputProps()} />
//         </div>
//       </div>
//     );
//   };

export default EventCreate