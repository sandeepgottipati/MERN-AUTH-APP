/* eslint-disable react/no-unescaped-entities */

import { Toaster } from "react-hot-toast";
import styles from "../styles/Username.module.css";

const Recovery = () => {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>
          <form className="pt-20">
            <div className="flex flex-col items-center gap-6">
              <span className="py-4 text-sm text-gray-500 text-left">
                Enter 6 digit OTP sent to your email address.
              </span>
              <input type="text" placeholder="OTP" className={styles.textbox} />

              <button
                type="submit"
                className=" bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-200 text-xl shadow-sm text-center hover:bg-orange-600 duration-200"
              >
                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                Recover
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Didn't Get OTP ?{" "}
                <button className="text-red-500">Resend OTP</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Recovery;
