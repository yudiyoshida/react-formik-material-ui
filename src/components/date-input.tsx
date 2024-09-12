import { TextField } from "@mui/material";
import { useField } from "formik";

interface DateInputProps {
  name: string;
  label: string;
}

export function DateInput({ name, ...props }: DateInputProps) {
  const [field, meta] = useField(name);

  return (
    <TextField 
      {...field}
      {...props}
      type="date"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      slotProps={{
        inputLabel: {
          shrink: true
        }
      }}
    />
  )
}