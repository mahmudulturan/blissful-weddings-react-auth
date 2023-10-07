import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const { createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return toast.error("Password should have minimum 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password should have atleats one capital letter");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password should have atleats one special character");
    }
    createUser(email, password)
      .then(() => {
        toast.success("Sign Up Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };


  return (
    <div className="min-h-[93vh] w-full flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-primary">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-contrast">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-nature bg-white/90 text-contrast"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-contrast">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-nature bg-white/90 text-contrast"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-md text-contrast bg-secondery">
            Sign up
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-xs text-center sm:px-6 text-contrast">
          Already have an account?
          <Link className="underline ml-2" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
