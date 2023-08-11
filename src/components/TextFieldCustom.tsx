import { TextField, InputAdornment } from "@mui/material";

type Props = {
  placeholder: string;
  icon: React.ReactNode;
};

const TextFieldCustom = ({ placeholder, icon }: Props) => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};

export default TextFieldCustom;
