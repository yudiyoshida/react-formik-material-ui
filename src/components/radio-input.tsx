import { Radio, FormControlLabel, FormControl, FormLabel, RadioGroup } from "@mui/material";
import { useField } from "formik";

interface RadioInputProps {
  name: string;
  label: string;
}

export function RadioInput({ name, ...props }: RadioInputProps) {
  const [field, meta] = useField(name);

  return (
    <FormControl error={meta.touched && Boolean(meta.error)}>
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup {...field}>
        <FormControlLabel control={<Radio />} label="Opção 01" value="opcao1" />
        <FormControlLabel control={<Radio />} label="Opção 02" value="opcao2" />
        <FormControlLabel control={<Radio />} label="Opção 03" value="opcao3" />
      </RadioGroup>
    </FormControl>
  );
}
