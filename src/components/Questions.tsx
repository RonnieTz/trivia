import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MobileStepper,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { decode } from "html-entities";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { changeAnswerChecked } from "../redux/options";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { store } from "../redux/store";
import { changeGameStarted } from "../redux/options";

const Questions = () => {
  const data = useSelector((state: RootState) => state.questions);
  const { answerChecked } = useSelector((state: RootState) => state.options);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState("");
  const [result, setResult] = useState("");
  const maxSteps = data.length;
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(changeAnswerChecked(false));
    setResult("");
  };

  const onCheck = () => {
    if (data[activeStep].correct === checked) {
      setResult("Correct Answer");
    }
    if (data[activeStep].correct !== checked && checked) {
      setResult("Wrong Answer");
    }

    if (checked) {
      dispatch(changeAnswerChecked(true));
    }
  };
  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          marginTop: 2,
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "lightgrey",
        }}
      >
        <Typography>{decode(data[activeStep]?.question)}</Typography>
      </Paper>
      <Box
        sx={{ height: 250, maxWidth: 600, width: "100%", mt: 2 }}
        bgcolor={"lightblue"}
        paddingLeft={3}
        boxSizing={"border-box"}
      >
        <FormControl disabled={answerChecked}>
          <RadioGroup
            name="answers"
            value={checked}
            onChange={(e) => setChecked(e.target.value)}
          >
            {data[activeStep]?.answers.map((item, index) => (
              <Box key={index}>
                <FormControlLabel
                  value={item}
                  control={<Radio color="success" />}
                  label={decode(item)}
                />
              </Box>
            ))}
          </RadioGroup>
          <Button
            disabled={answerChecked}
            onClick={onCheck}
            sx={{ marginTop: 2 }}
            variant="contained"
          >
            Check Answer
          </Button>
          <FormHelperText>{result}</FormHelperText>
        </FormControl>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1 || !answerChecked}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={null}
      />
      <Button
        onClick={() => store.dispatch(changeGameStarted(false))}
        variant="contained"
        sx={{ marginTop: 5 }}
        color="secondary"
      >
        New Game
      </Button>
    </Box>
  );
};

export default Questions;
