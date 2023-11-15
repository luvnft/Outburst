import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useBlog } from "../context/Blog";

const useCreatePost = () => {
  const [isLoading, setLoading] = useState(false);
  const { createPost } = useBlog();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout( async () => {
        await createPost(values.title, values.content);
        setLoading(false);
      }, 2000);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("It's okay, just vent it."),
      content: Yup.string().required("Just vent on it."),
    }),
  });
  return [isLoading, formik];
};

export default useCreatePost;
