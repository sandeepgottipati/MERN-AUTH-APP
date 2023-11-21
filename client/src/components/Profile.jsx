import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";

import { Toaster } from "react-hot-toast";
import styles from "../styles/Username.module.css";
import avatar from "../assets/profile.png";
import { useState } from "react";
import { convertToBase64 } from "../helper/convert";
const Profile = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      address: "",
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
  const userLogout = () => {};
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={styles.glass}
          style={{ width: "45%", paddingTop: "2em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can Update the Details.
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
              <div className="flex w-3/4 gap-10">
                <input
                  type="text"
                  placeholder="FirstName"
                  {...formik.getFieldProps("firstName")}
                  className={styles.textbox}
                />
                <input
                  type="text"
                  placeholder="LastName"
                  {...formik.getFieldProps("lastName")}
                  className={styles.textbox}
                />
              </div>
              <div className="flex w-3/4 gap-10">
                <input
                  type="text"
                  placeholder="email*"
                  {...formik.getFieldProps("email")}
                  className={styles.textbox}
                />
                <input
                  type="text"
                  placeholder="Mobile No"
                  {...formik.getFieldProps("mobile")}
                  className={styles.textbox}
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                {...formik.getFieldProps("password")}
                className={styles.textbox}
              />
              <button
                type="submit"
                className=" bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-200 text-xl shadow-sm text-center hover:bg-orange-600 duration-200"
              >
                Update
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Come Back Later ?{" "}
                <button className="text-red-500" to="/" onClick={userLogout}>
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
