import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={register({
            required: "Required",
          })}
          className="form-control"
        />
        <span className="badge badge-danger">
          {errors.name && errors.name.message}
        </span>
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={register({
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          className="form-control"
        />
        <span className="badge badge-danger">
          {errors.email && errors.email.message}
        </span>
        <br />
        <label htmlFor="age">Age :</label>
        <input
                  type="number"
                  min="1"
          name="age"
          id="age"
          ref={register({
            required: "Required",
          })}
          className="form-control"
        />
        <span className="badge badge-danger">
          {errors.age && errors.age.message}
        </span>
        <br />
        <div className="text-center pt-3">
          <button className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
