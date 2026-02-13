import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  category: yup.string().required("Category is required"),
  content: yup
    .string()
    .min(50, "Content must be at least 50 characters")
    .required("Content is required"),
  date: yup.string().required("Publish date is required")
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
    const newPost = {
      id: Date.now(),
      ...data
    };

    mutation.mutate(newPost, {
      onSuccess: () => {
        navigate("/posts");
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">
        Add New Blog Post
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        {/* Title */}
        <div>
          <label className="block font-medium">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="w-full mt-1 border rounded p-2"
          />
          <p className="text-red-500 text-sm">
            {errors.title?.message}
          </p>
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium">
            Author
          </label>
          <input
            type="text"
            {...register("author")}
            className="w-full mt-1 border rounded p-2"
          />
          <p className="text-red-500 text-sm">
            {errors.author?.message}
          </p>
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">
            Category
          </label>
          <select
            {...register("category")}
            className="w-full mt-1 border rounded p-2"
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="DevOps">DevOps</option>
          </select>
          <p className="text-red-500 text-sm">
            {errors.category?.message}
          </p>
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium">
            Content
          </label>
          <textarea
            rows="5"
            {...register("content")}
            className="w-full mt-1 border rounded p-2"
          />
          <p className="text-red-500 text-sm">
            {errors.content?.message}
          </p>
        </div>

        {/* Publish Date */}
        <div>
          <label className="block font-medium">
            Publish Date
          </label>
          <input
            type="date"
            {...register("date")}
            className="w-full mt-1 border rounded p-2"
          />
          <p className="text-red-500 text-sm">
            {errors.date?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={!isValid || mutation.isPending}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          {mutation.isPending ? "Submitting..." : "Publish Post"}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
