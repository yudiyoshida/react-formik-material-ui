import { Form, Formik, FormikHelpers } from "formik";
import * as yup from 'yup';
import { TextInput } from "./components/text-input";
import { Button } from "@mui/material";
import { PasswordInput } from "./components/password-input";

interface FormFields {
  name: string;
  age: number;
  email: string;
  password: string;
}

const initialValues: FormFields = {
  name: "",
  age: 0,
  email: "",
  password: "",
};

const validationSchema: yup.Schema<FormFields> = yup.object({
  name: yup.string().required(),
  age: yup.number().typeError('Idade inválida').required().positive().integer(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
})

export function App() {
  function handleSubmit(values: FormFields, formikHelpers: FormikHelpers<FormFields>) {
    console.log({values, formikHelpers});
  }

  return (
    <main className="h-screen p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid md:grid-cols-2 gap-3">
            <TextInput name="name" label="Nome" type="text" />
            <TextInput name="age" label="Idade" type="text" />
            <TextInput name="email" label="Email" type="email" />
            <PasswordInput name="password" label="Senha" />
            <Button
              className="md:col-span-2"
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >Enviar</Button>
          </div>
        </Form>
      </Formik>
    </main>
  )
}
