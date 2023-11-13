import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";


const usePost = () => {
    const [isLoading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues : {
            title : "",
            content : ""
        }, 
        onSubmit : (values) => {
            setLoading(true);
            setTimeout(() => {
                
                
                setLoading(false);
            }, 1000);
        },
        validationSchema : Yup.object({
            title : Yup.string()
                .min(2, "Title must at least be 2 characters long.")
                .required("Title is required."),
            content : Yup.string().required("Content is required.")
        })
    })
    return [isLoading, formik];
}

export default usePost;