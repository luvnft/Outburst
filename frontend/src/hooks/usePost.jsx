import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const usePost = () => {
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    },
    validationSchema: Yup.object({
    //   title: Yup.string().required("It's okay, just vent it."),
      content: Yup.string().required("Just vent on it."),
    }),
  });
  return [isLoading, formik];
};

export default usePost;
