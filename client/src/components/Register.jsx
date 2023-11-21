import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import styles from "../styles/Username.module.css";
import avatar from "../assets/profile.png";
import { useState } from "react";
import { convertToBase64 } from "../helper/convert";
const Register = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: registerValidation,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });

      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={styles.glass}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
              <input type="file" onChange={onUpload} id="profile" />
            </div>
            <div className="flex flex-col items-center gap-6">
              <input
                type="text"
                placeholder="email*"
                {...formik.getFieldProps("email")}
                className={styles.textbox}
              />
              <input
                type="text"
                placeholder="userName*"
                {...formik.getFieldProps("userName")}
                className={styles.textbox}
              />
              <input
                type="password"
                placeholder="password*"
                {...formik.getFieldProps("password")}
                className={styles.textbox}
              />
              <button
                type="submit"
                className=" bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-200 text-xl shadow-sm text-center hover:bg-orange-600 duration-200"
              >
                Register
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registered ?{" "}
                <Link to="/" className="text-red-500">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
