import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
    },
  });
  console.log(errors);
  return (
    <section id="contact" className="z-10 overflow-hidden bg-black">
      <div className="container h-auto w-full mx-auto py-5 md:py-5">
        <div className="z-0">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-md md:text-lg font-bold mx-auto px-2 md:px-4"
          >
            Want to get in touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[20px] md:text-[30px] lg:text-[48px] px-2 md:px-4"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">
              work{" "}
            </span>
            together:
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Form for potential employers */}
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-4 py-4 gap-5 z-10">
              <div className="z-10">
                <label
                  htmlFor="firstName"
                  className="text-md md:text-lg lg:text-xl font-bold px-3"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 2,
                      message: "Must be more than 2 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Input passed max limit",
                    },
                  })}
                  id="firstName"
                  placeholder="First name"
                  className="text-black !bg-white ring-1 ring-gray-500/80 focus-within:ring-purple-600 h-12 w-full px-3 text-md md:text-lg lg:text-xl rounded-lg z-10"
                />
                <p className="text-red-600">{errors.firstName?.message}</p>
              </div>
              <div className="z-10">
                <div className="z-10">
                  <label
                    htmlFor="lastName"
                    className="text-md md:text-lg lg:text-xl font-bold px-3"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "This is required",
                      minLength: {
                        value: 2,
                        message: "Must be more than 2 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Input passed max limit",
                      },
                    })}
                    id="lastName"
                    placeholder="Last name"
                    className="text-black !bg-white ring-1 ring-gray-500/80 focus-within:ring-purple-600 h-12 w-full px-3 text-md md:text-lg lg:text-xl rounded-lg z-10"
                  />
                  <p className="text-red-600">{errors.lastName?.message}</p>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-4 py-4 grid grid-cols-1">
              <label
                htmlFor="email"
                className="text-md md:text-lg lg:text-xl font-bold px-3"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Invalid email format",
                  },
                  minLength: {
                    value: 2,
                    message: "Must be more than 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Input passed max limit",
                  },
                })}
                id="email"
                placeholder="Email"
                className="text-black !bg-white ring-1 ring-gray-500/80 focus-within:ring-purple-600 h-12 w-full px-3 text-md md:text-lg lg:text-xl rounded-lg z-10"
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="px-2 md:px-4 py-4 grid grid-cols-1">
              <label
                htmlFor="comment"
                className="text-md md:text-lg lg:text-xl font-bold px-3"
              >
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                {...register("comment", {
                  required: "This is required",
                  minLength: {
                    value: 5,
                    message: "Must be more than 2 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Input passed max limit",
                  },
                })}
                placeholder="Message"
                className="text-black h-32 !bg-white ring-1 ring-gray-500/80 focus-within:ring-purple-600 w-full px-3 text-md md:text-lg lg:text-xl rounded-lg z-10"
              ></textarea>
              <p className="text-red-600">{errors.comment?.message}</p>
            </div>
            <div className="px-2 md:px-4 pt-2 flex justify-end">
              <input
                type="submit"
                className="w-full bg-black md:w-1/6 text-center rounded-full font-bold border border-white/80 px-10 py-6 uppercase text-sm md:text-[13px] z-10"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
