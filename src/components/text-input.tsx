import { TextField } from "@mui/material";
import { useField } from "formik";

interface TextInputProps {
  name: string;
  label: string;
  type: "text" | "email";
}

export function TextInput({ name, ...props }: TextInputProps) {
  const [field, meta] = useField(name);

  return (
    <TextField 
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}