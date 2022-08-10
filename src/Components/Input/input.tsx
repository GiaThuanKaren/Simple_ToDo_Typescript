import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  todoText?: String;
  handleSetTodoItem: React.Dispatch<React.SetStateAction<String>>;
}
export const InputFullWidth: React.FC<Props> = function ({
  handleSetTodoItem,
  todoText,
}) {
  // const HandleAdd = function () {};
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <TextField
        value={todoText}
        onChange={(e) => {
          handleSetTodoItem(e.target.value);
        }}
        fullWidth
        label="fullWidth"
        id="fullWidth"
      />
    </Box>
  );
};
