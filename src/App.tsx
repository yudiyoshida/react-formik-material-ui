import { Form, Formik, FormikHelpers } from "formik";
import * as yup from 'yup';
import { TextInput } from "./components/text-input";
import { Button } from "@mui/material";
import { PasswordInput } from "./components/password-input";
import { SelectInput } from "./components/select-input";
import { DateInput } from "./components/date-input";
import { CheckboxInput } from "./components/checkbox-input";

interface FormFields {
  name: string;
  age: number;
  email: string;
  password: string;
  aboutme: string;
  gender: string;
  birthdate: Date;
  acceptTerms: boolean;
}

const initialValues: FormFields = {
  name: "",
  age: 0,
  email: "",
  password: "",
  aboutme: "",
  gender: "",
  birthdate: new Date(),
  acceptTerms: false
};

const validationSchema: yup.Schema<FormFields> = yup.object({
  name: yup.string().required(),
  age: yup.number().typeError('Idade inválida').required().positive().integer(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  aboutme: yup.string().required(),
  gender: yup.string().required(),
  birthdate: yup.date().required(),
  acceptTerms: yup.boolean().oneOf([true]).required()
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
            <SelectInput name="gender" label="Gênero" />
            <DateInput name="birthdate" label="Data de nascimento" />
            <TextInput name="aboutme" label="Sobre mim" type="text" multiline />
            <CheckboxInput name="acceptTerms" label="Aceito os termos de uso" />
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
