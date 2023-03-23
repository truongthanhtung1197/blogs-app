import { yupResolver } from '@hookform/resolvers/yup';
import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { schema } from './CreateOrEditBlog.config';

import FormInput from 'components/Form/FormInput';
import { Images } from 'styles/image';
import { createBlogApi, editBlogApi } from 'services';
import { IBlog, IBlogForm } from 'types/blog.type';
import { useNavigate, useParams } from 'react-router-dom';
import { showToastError, showToastSuccess } from 'utils/Toast.util';

interface ICreateOrEditBlogFormProps {
    blog?: IBlog;
}

const CreateOrEditBlogForm = ({ blog }: ICreateOrEditBlogFormProps) => {
    const params = useParams();
    const navigate = useNavigate();
    const formData = useForm<IBlogForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: blog?.title,
            content: blog?.content,
            image: blog?.image
        }
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = formData;

    const onSubmit = useCallback(
        async (data: IBlogForm) => {
            try {
                const res = params?.id
                    ? await editBlogApi(data, String(params?.id))
                    : await createBlogApi(data);
                if (res?.ok) {
                    showToastSuccess(params?.id ? 'Edit success' : 'Create success');
                    navigate(-1);
                    reset();
                } else {
                    showToastError(params?.id ? 'Edit failure' : 'Create failure');
                }
            } catch (error) {
                showToastError();
            }
        },
        [params?.id]
    );

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container mx-auto p-5 md:p-10 border mt-20 shadow-xl">
                <div className="font-bold text-lg mb-3">
                    {params?.id ? 'EDIT BLOG' : 'CREATE BLOG'}
                </div>
                <div className="flex flex-col gap-3">
                    <FormInput
                        register={register('title')}
                        placeholder="Enter title"
                        type="text"
                        errorName={errors?.title?.message && String(errors?.title?.message)}
                        title="Title"
                    />
                    <FormInput
                        register={register('content')}
                        placeholder="Enter content"
                        type="textarea"
                        errorName={errors?.content?.message && String(errors?.content?.message)}
                        title="Content"
                    />
                    <FormInput
                        register={register('image')}
                        placeholder="Enter image link"
                        type="text"
                        errorName={errors?.image?.message && String(errors?.image?.message)}
                        title="Image URL"
                    />
                </div>
                <button
                    type="submit"
                    className="group text-xs center justify-end pr-3 gap-3 tracking-[2px] mt-4 font-bold text-black cursor-pointer">
                    SUBMIT
                    <div className="group-hover:translate-x-[10px] duration-700 flex top-[-20px] -right-[60px] relative items-center">
                        <img className="w-[26px]" src={Images.arrowRight.default} alt="arrow" />
                    </div>
                </button>
            </form>
        </>
    );
};

export default memo(CreateOrEditBlogForm);
