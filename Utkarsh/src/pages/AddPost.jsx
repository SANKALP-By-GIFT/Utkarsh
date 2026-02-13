import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreatePost } from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    content: yup.string().required(),
    date: yup.string().required()
});

const AddPost = () => {
    const navigate = useNavigate();
    const mutation = useCreatePost();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                alert("Post Added Successfully");
                navigate("/posts");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("title")} placeholder="Title" className="input" />
            <p className="text-red-500">{errors.title?.message}</p>

            <input {...register("author")} placeholder="Author" className="input" />
            <textarea {...register("content")} placeholder="Content" />

            <button
                disabled={!isValid}
                className="bg-blue-600 text-white px-4 py-2"
            >
                Submit
            </button>
        </form>
    );
};

export default AddPost;