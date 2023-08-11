import { Button } from "@mui/material";
import { borderSecondaryColor, mainColor } from "../constants/colors";

type Props = {
  label: string;
  handleAction: VoidFunction;
  buttonColor?: string;
  textButtonColor?: string;
};

const ButtonCustom = ({
  label,
  handleAction,
  buttonColor,
  textButtonColor,
}: Props) => {
  return (
    <Button
      size="small"
      variant="contained"
      disableElevation
      sx={{
        color: textButtonColor ?? "#fff",
        backgroundColor: buttonColor || mainColor,
        ":hover": {
          backgroundColor: buttonColor || mainColor,
        },
        border: 1,
        borderColor: borderSecondaryColor,
      }}
      onClick={handleAction}
    >
      {label}
    </Button>
  );
};

export default ButtonCustom;
