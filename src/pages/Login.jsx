// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import {
//   FaEnvelope,
//   FaEye,
//   FaEyeSlash,
//   FaLock,
//   FaShoppingBag,
// } from "react-icons/fa";

// const Login = () => {
//   const navigate = useNavigate();

//   // Demo login credentials
//   const demoUser = {
//     email: "adinath@gmail.com",
//     password: "123456",
//     name: "Demo Customer",
//   };

//   // Login form data
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Input value change
//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((previousData) => ({
//       ...previousData,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // User typing सुरू केल्यावर error clear
//     setErrors((previousErrors) => ({
//       ...previousErrors,
//       [name]: "",
//     }));
//   };

//   // Form validation
//   const validateForm = () => {
//     const validationErrors = {};

//     if (!formData.email.trim()) {
//       validationErrors.email = "Email is required";
//     } else if (
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       validationErrors.email = "Please enter a valid email";
//     }

//     if (!formData.password.trim()) {
//       validationErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       validationErrors.password =
//         "Password must be at least 6 characters";
//     }

//     setErrors(validationErrors);

//     return Object.keys(validationErrors).length === 0;
//   };

//   // Demo credentials automatically भरायचे
//   const fillDemoCredentials = () => {
//     setFormData({
//       email: demoUser.email,
//       password: demoUser.password,
//       rememberMe: false,
//     });

//     setErrors({});
//     toast.info("Demo credentials filled");
//   };

//   // Login submit
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const isValid = validateForm();

//     if (!isValid) {
//       toast.error("Please enter valid login details");
//       return;
//     }

//     setLoading(true);

//     // Temporary frontend login checking
//     setTimeout(() => {
//       if (
//         formData.email === demoUser.email &&
//         formData.password === demoUser.password
//       ) {
//         const loggedInUser = {
//           name: demoUser.name,
//           email: demoUser.email,
//           isLoggedIn: true,
//         };

//         // User browser localStorage मध्ये save
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify(loggedInUser)
//         );

//         toast.success("Login successful");

//         setLoading(false);

//         // Login नंतर Home page
//         navigate("/");
//       } else {
//         toast.error("Invalid email or password");
//         setLoading(false);
//                 navigate("/");

//       }
//     }, 800);
//   };

//   return (
//     <main className="min-h-screen bg-slate-100 px-4 py-8">
//       <div className="mx-auto grid min-h-[85vh] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
//         {/* Left Section */}
//         <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
//           <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

//           <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

//           <Link
//             to="/"
//             className="relative z-10 inline-flex items-center gap-3 text-3xl font-bold"
//           >
//             <span className="rounded-xl bg-orange-500 p-3">
//               <FaShoppingBag />
//             </span>

//             <span>
//               Shop
//               <span className="text-orange-500">Easy</span>
//             </span>
//           </Link>

//           <div className="relative z-10">
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
//               Welcome Back
//             </p>

//             <h1 className="max-w-lg text-5xl font-bold leading-tight">
//               Everything you love, just one login away.
//             </h1>

//             <p className="mt-6 max-w-md leading-7 text-slate-300">
//               Login to manage your cart, explore products and continue
//               your shopping journey.
//             </p>
//           </div>

//           <div className="relative z-10 grid grid-cols-3 gap-4">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-2xl font-bold text-orange-400">
//                 100+
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Products
//               </p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-2xl font-bold text-orange-400">
//                 24/7
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Shopping
//               </p>
//             </div>

//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-2xl font-bold text-orange-400">
//                 100%
//               </p>
//               <p className="mt-1 text-sm text-slate-400">
//                 Secure
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Right Login Form */}
//         <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
//           <div className="w-full max-w-md">
//             {/* Mobile Logo */}
//             <Link
//               to="/"
//               className="mb-8 inline-flex items-center gap-3 text-2xl font-bold text-slate-900 lg:hidden"
//             >
//               <span className="rounded-xl bg-orange-500 p-3 text-white">
//                 <FaShoppingBag />
//               </span>

//               <span>
//                 Shop
//                 <span className="text-orange-500">Easy</span>
//               </span>
//             </Link>

//             <div className="mb-8">
//               <p className="mb-2 font-semibold text-orange-500">
//                 Welcome back
//               </p>

//               <h2 className="text-4xl font-bold text-slate-900">
//                 Login to your account
//               </h2>

//               <p className="mt-3 leading-6 text-slate-500">
//                 Enter your registered email and password.
//               </p>
//             </div>

//             {/* <div className="mb-7 rounded-2xl border border-orange-200 bg-white-50 p-5"> */}
//               {/* <div className="mb-3 flex items-center justify-between"> */}
//                 {/* <h3 className="font-bold text-slate-900">
//                   Demo Login Details
//                 </h3> */}

//                 {/* <button
//                   type="button"
//                   onClick={fillDemoCredentials}
//                   className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-orange-600"
//                 >
//                   Auto Fill
//                 </button> */}
//               {/* </div> */}

//               {/* <p className="text-sm text-slate-700">
//                 <strong>Email:</strong> Adinath@gmail.com
//               </p> */}

//               {/* <p className="mt-1 text-sm text-slate-700">
//                 <strong>Password:</strong> 123456
//               </p> */}
//             {/* </div> */}

//             <form onSubmit={handleSubmit} noValidate>
//               {/* Email */}
//               <div className="mb-5">
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-semibold text-slate-700"
//                 >
//                   Email Address
//                 </label>

//                 <div
//                   className={`flex items-center rounded-xl border bg-white px-4 transition focus-within:ring-4 ${
//                     errors.email
//                       ? "border-red-500 focus-within:ring-red-100"
//                       : "border-slate-300 focus-within:border-orange-500 focus-within:ring-orange-100"
//                   }`}
//                 >
//                   <FaEnvelope className="shrink-0 text-slate-400" />

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="customer@gmail.com"
//                     autoComplete="email"
//                     className="w-full bg-transparent px-3 py-4 text-slate-900 outline-none placeholder:text-slate-400"
//                   />
//                 </div>

//                 {errors.email && (
//                   <p className="mt-2 text-sm font-medium text-red-600">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div className="mb-5">
//                 <label
//                   htmlFor="password"
//                   className="mb-2 block text-sm font-semibold text-slate-700"
//                 >
//                   Password
//                 </label>

//                 <div
//                   className={`flex items-center rounded-xl border bg-white px-4 transition focus-within:ring-4 ${
//                     errors.password
//                       ? "border-red-500 focus-within:ring-red-100"
//                       : "border-slate-300 focus-within:border-orange-500 focus-within:ring-orange-100"
//                   }`}
//                 >
//                   <FaLock className="shrink-0 text-slate-400" />

//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     className="w-full bg-transparent px-3 py-4 text-slate-900 outline-none placeholder:text-slate-400"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowPassword(
//                         (previousValue) => !previousValue
//                       )
//                     }
//                     className="shrink-0 text-lg text-slate-400 transition hover:text-orange-500"
//                     aria-label={
//                       showPassword
//                         ? "Hide password"
//                         : "Show password"
//                     }
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>

//                 {errors.password && (
//                   <p className="mt-2 text-sm font-medium text-red-600">
//                     {errors.password}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me */}
//               <div className="mb-7 flex items-center justify-between gap-4">
//                 <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
//                   <input
//                     type="checkbox"
//                     name="rememberMe"
//                     checked={formData.rememberMe}
//                     onChange={handleChange}
//                     className="h-4 w-4 accent-orange-500"
//                   />

//                   Remember me
//                 </label>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     toast.info(
//                       "Forgot password feature will be added later"
//                     )
//                   }
//                   className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
//                 >
//                   Forgot Password?
//                 </button>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full rounded-xl bg-slate-950 px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-slate-400"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             <div className="my-7 flex items-center gap-4">
//               <div className="h-px flex-1 bg-slate-200" />

//               <span className="text-sm text-slate-400">
//                 New customer?
//               </span>

//               <div className="h-px flex-1 bg-slate-200" />
//             </div>

//             <Link
//               to="/register"
//               className="block w-full rounded-xl border border-slate-300 px-5 py-4 text-center font-bold text-slate-800 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
//             >
//               Create New Account
//             </Link>

//             <p className="mt-7 text-center text-sm text-slate-400">
//               By continuing, you agree to our Terms and Privacy Policy.
//             </p>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Login;