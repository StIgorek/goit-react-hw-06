import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Невірний формат номеру телефону. Введіть у форматі 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        values.id = Date.now();
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <div className={css.list}>
          <label>Name</label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.errMsg} />
        </div>
        <div className={css.list}>
          <label>Number</label>
          <Field
            type="tel"
            name="number"
            className={css.input}
            placeholder="123-45-67"
          />
          <ErrorMessage name="number" component="span" className={css.errMsg} />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
