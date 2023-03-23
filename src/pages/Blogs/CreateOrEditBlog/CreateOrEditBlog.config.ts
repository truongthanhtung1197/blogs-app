import * as yup from 'yup';

export const schema = yup.object({
    title: yup.string().required('This field cannot be blank.').trim(),
    content: yup.string().required('This field cannot be blank.').trim(),
    image: yup.string().required('This field cannot be blank.').trim()
});
