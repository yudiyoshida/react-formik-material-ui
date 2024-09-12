import { IconButton, TextField } from "@mui/material";
import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordInputProps {
  name: string;
  label: string;
}

export function PasswordInput({ name, ...props }: PasswordInputProps) {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField 
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye /> : <EyeOff />}
            </IconButton>
          )
        }
      }}
    />
  )
}