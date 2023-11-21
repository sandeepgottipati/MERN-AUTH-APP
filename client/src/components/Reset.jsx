import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

import { Toaster } from "react-hot-toast";
import styles from "../styles/Username.module.css";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: passwordValidate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>
          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center gap-6">
              <input
                type="password"
                placeholder=" New password"
                {...formik.getFieldProps("password")}
                className={styles.textbox}
              />
              <input
                type="password"
                placeholder="Repeat password"
                {...formik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
              />
              <button
                type="submit"
                className=" bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-200 text-xl shadow-sm text-center hover:bg-orange-600 duration-200"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Reset;
