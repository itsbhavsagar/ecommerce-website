import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-screen bg-white bg-contain bg-center bg-no-repeat py-16 text-center font-medium text-gray-700 md:py-24">
      <div className="mx-auto w-full py-0 text-gray-700 md:py-24">
        <div className="flex flex-wrap text-center">
          <div className="lg:w-1\/2 mx-auto w-full max-w-full flex-shrink-0 text-gray-700 lg:flex-none xl:w-5/12 xl:flex-none">
            <h2 className="mt-0 mb-3 font-bold tracking-normal text-gray-800 md:text-3xl">
              404 Error !
            </h2>
            <p className="mt-0 mb-5 text-sm md:px-24 lg:px-3">
              The page you're looking for does not exist
            </p>
            <a
              href="#"
              className="rounded-md border-blue-600 bg-blue-600 px-5 py-2 text-sm font-bold text-white focus:bg-blue-700 focus:text-white hover:bg-blue-700 hover:text-white hover:shadow-md"
            >
              <Link to="/"> Go Back</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
