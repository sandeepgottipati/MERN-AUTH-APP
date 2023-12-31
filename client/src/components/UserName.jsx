import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { userNameValidate } from "../helper/validate";
const UserName = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    validate: userNameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>
            <div className="flex flex-col items-center gap-6">
              <input
                type="text"
                placeholder="Username"
                {...formik.getFieldProps("userName")}
                className={styles.textbox}
              />

              <button
                type="submit"
                className=" bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-200 text-xl shadow-sm text-center hover:bg-orange-600 duration-200"
              >
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member ?{" "}
                <Link to="/register" className="text-red-500">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserName;
