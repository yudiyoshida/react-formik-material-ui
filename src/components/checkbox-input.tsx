import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "formik";

interface CheckboxInputProps {
  name: string;
  label: string;
}

export function CheckboxInput({ name, ...props }: CheckboxInputProps) {
  const [field] = useField(name);

  return (
    <FormControlLabel
      label={props.label} 
      control={<Checkbox {...field} {...props} checked={field.value} />}
    />
  )
}