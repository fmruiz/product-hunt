import React, { Fragment } from "react";
import { Layout } from "../components/layout/Layout";
import { Form, Field, InputSubmit } from "../components/ui/Form";

const SignUp = () => {
  return (
    <div>
      <Layout>
        <Fragment>
          <h1>SignUp</h1>
          <Form>
            <Field>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Add your name"
                name="name"
              />
            </Field>
            <Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Add your email"
                name="email"
              />
            </Field>
            <Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Add your password"
                name="password"
              />
            </Field>
            <InputSubmit type="submit" value="Create Account" />
          </Form>
        </Fragment>
      </Layout>
    </div>
  );
};

export default SignUp;
