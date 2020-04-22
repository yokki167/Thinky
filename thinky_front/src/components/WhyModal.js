import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import modalStyles from "../styles/WhyModal.module.scss";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(3, 0),
      width: "70%",
      minHeight: "3rem",
      fontSize: "2rem",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const selectStyle = {
  width: "30vh",
};

const btnStyle = {
  height: "50px",
  width: "100px",
  transform: "translate(8px, -43px)",
};

export default function WhyModal() {
  const classes = useStyles();
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={modalStyles.modalBox}>
      <div className={modalStyles.title}>「Why?」を深掘りしよう！</div>
      <div className={modalStyles.subBox}>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              ジャンルを選択
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              label="ジャンルを選択"
              style={selectStyle}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>科学</MenuItem>
              <MenuItem value={20}>自然</MenuItem>
              <MenuItem value={30}>自己</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="この「Why」をみんなに共有する"
        />
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextareaAutosize
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
        />
        <Link to="/why">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={btnStyle}
          >
            決定
          </Button>
        </Link>
      </form>
    </div>
  );
}
