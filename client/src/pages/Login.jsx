import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../utility/validation-schema.utility';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  return (
    <>
      <div className="flex w-screen flex-wrap text-slate-800 bg-white">
        <div className="flex w-full flex-col md:w-1/2 ">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <a href="#" className="text-2xl font-bold text-blue-600">
              ShopEase
            </a>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back <br />
              to <span className="text-blue-600">ShopEase</span>
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Sign in to your account below.
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-stretch pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600 ml-1 capitalize">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-600 ml-1 capitalize">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <a
                href="#"
                className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
              >
                Forgot password?
              </a>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
              >
                Sign in
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account ? {''}
                <Link
                  to="/signup"
                  className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
                >
                  Sign up for free.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidde h-[90vh] select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
          <div className="py-6 px-8 text-white xl:w-[40rem] w-full h-full">
            <img
              className="ml-8 w-full h-[80vh] rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
