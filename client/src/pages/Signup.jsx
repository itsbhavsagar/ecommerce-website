import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../utility/validation-schema.utility';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  return (
    <>
      <div className="flex w-screen flex-wrap text-slate-800 h-[90vh] ">
        <div className="relative hidden  select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2 ">
          <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
            <img
              className="mx-auto w-96 max-w-md rounded-lg object-cover"
              src="https://images.pexels.com/photos/1058140/pexels-photo-1058140.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
          </div>
        </div>
        <div className="flex w-full flex-col md:w-1/2 bg-white">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              {' '}
              ShopEase .{' '}
            </Link>
          </div>
          <div className=" mt-6 mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
              Create your free account
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using ShopEase ?
              <Link
                to="/login"
                className="whitespace-nowrap font-semibold text-blue-700"
              >
                {' '}
                Login here
              </Link>
            </p>

            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
                or create a new one
              </div>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-stretch pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="text"
                    id="name"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password (minimum 8 characters)"
                  />
                </div>
              </div>
              <div className="block">
                <input
                  className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="inline-block" htmlFor="remember-me">
                  {' '}
                  I agree to the{' '}
                  <Link to="" className="underline" href="#">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
