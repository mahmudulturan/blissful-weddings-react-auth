import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;
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
        updateUserProfile(name,imageUrl)
          .then(() => {
            location.reload();
          })
          .catch((error) => console.error(error));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div
      data-aos="zoom-in-up"
      className="min-h-[93vh] w-full flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-primary">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-contrast">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border-nature bg-white/90 text-contrast"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-contrast">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Your Photo URL"
              className="w-full px-4 py-3 rounded-md border-nature bg-white/90 text-contrast"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-contrast">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-nature bg-white/90 text-contrast"
              required
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
              required
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
