import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="text-center font-jSans my-4">
        <h1 className="text-3xl font-semibold">{error.statusText}</h1>
        <img className="w-7/12 mx-auto"
          src="https://i.ibb.co/wBzYG0S/undraw-Page-not-found-re-e9o6.png"
          alt=""
        />
        <p className="font-medium my-4">{error.data}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
