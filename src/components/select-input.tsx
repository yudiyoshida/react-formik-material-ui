import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";

interface SelectInputProps {
  name: string;
  label: string;
}

export function SelectInput({ name, ...props }: SelectInputProps) {
  const [field, meta] = useField(name);

  return (
    <>
      <FormControl error={meta.touched && Boolean(meta.error)}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          {...field}
          {...props}
        >
          <MenuItem value="male">Masculino</MenuItem>
          <MenuItem value="female">Feminino</MenuItem>
        </Select>
        <FormHelperText>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    </>
  )
}