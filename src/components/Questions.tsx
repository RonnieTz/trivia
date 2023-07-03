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
import CelebrationIcon from "@mui/icons-material/Celebration";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
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
  const [correctAnswers, setCorrectAnswers] = useState(0);
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
      setCorrectAnswers((prev) => prev + 1);
    }
    if (data[activeStep].correct !== checked && checked) {
      setResult("Wrong Answer");
    }

    if (checked) {
      dispatch(changeAnswerChecked(true));
    }
  };

  const onNewGame = () => {
    store.dispatch(changeGameStarted(false));
    setChecked("");
    dispatch(changeAnswerChecked(false));
    setCorrectAnswers(0);
  };
  return (
    <Box position={"relative"} sx={{ maxWidth: 600, flexGrow: 1 }}>
      {activeStep === maxSteps - 1 && answerChecked && (
        <Box
          zIndex={1}
          position={"absolute"}
          bgcolor={"greenyellow"}
          width={"70%"}
          height={"30%"}
          top={"12%"}
          left={"15%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography variant="h4">
            Congratulations{" "}
            <CelebrationIcon color="success" fontSize={"large"} />
          </Typography>
          <Typography marginRight={3} marginTop={2} variant="h6">
            {`You got ${correctAnswers}/${data.length}`}
          </Typography>
        </Box>
      )}
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
                {data[activeStep].correct === checked &&
                  checked === item &&
                  answerChecked && (
                    <DoneIcon
                      color="success"
                      sx={{ top: 5, position: "relative" }}
                    />
                  )}
                {data[activeStep].correct !== checked &&
                  checked === item &&
                  answerChecked && (
                    <CloseIcon
                      color="error"
                      sx={{ top: 8, position: "relative" }}
                    />
                  )}
                {data[activeStep].correct === item &&
                  checked !== item &&
                  answerChecked && (
                    <DoneIcon
                      color="success"
                      sx={{ top: 5, position: "relative" }}
                    />
                  )}
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
        onClick={onNewGame}
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
