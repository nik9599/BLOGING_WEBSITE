import React from "react";
import NavBar from "../NavBar/NavBar";
import { Form, Field } from "react-final-form";

const CreateBlog = () => {
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <NavBar />

      {/* Form */}
      <div className="p-5">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form
              className="bg-gray-800 p-5 rounded-md"
              onSubmit={handleSubmit}
            >
              {/* Title Field */}
              <Field
                name="title"
                validate={(value) => (value ? undefined : "Required")}
              >
                {({ input, meta }) => (
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">
                      Title
                    </label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Enter blog title"
                      className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                    />
                    {meta.touched && meta.error && (
                      <span className="text-red-500 text-sm">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting || pristine}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
