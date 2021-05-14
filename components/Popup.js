import { useRouter } from "next/router";
// import EjectIcon from "@material-ui/icons/Eject";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// ****************************************************************************************

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

export const Popup = () => {
  const router = useRouter();
  const [popupClass, setPopupClass] = useState("overlay_hidden");

  const [formError, setFormError] = useState("");

  const classes = useStyles();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <>
      <div className="vp_button">
        <Button
          style={{
            width: "15Opx",
            height: "60px",
            backgroundColor: "#ff5300",
          }}
          variant="contained"
          color="secondary"
          onClick={() => {
            setPopupClass("overlay");
          }}
        >
          comprar
        </Button>
      </div>

      <div className={popupClass}>
        <div className="popup">
          <div>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Contact
                <div style={{ marginLeft: "50px", display: "inline" }}>
                  <Image
                    src="/remove.png"
                    width={20}
                    height={20}
                    onClick={() => {
                      setPopupClass("overlay_hidden");
                    }}
                  />
                </div>
              </Typography>
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  phone: "",
                }}
                onSubmit={async (values) => {
                  setFormError("");
                  const { email, name, phone } = values;
                  if (email != "" && name != "" && phone != "") {
                    console.log(name, email, phone);
                  } else if (email === "") {
                    setFormError(`please verify your email`);
                  } else if (name === "") {
                    setFormError(`please fill in your name`);
                  } else if (phone === "") {
                    setFormError(`please fill in your phone number`);
                  }
                }}
              >
                {({ handleChange, handleSubmit }) => (
                  <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                    noValidate
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          type="text"
                          autoComplete="fname"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          label="Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          type="email"
                          autoComplete="fname"
                          name="email"
                          variant="outlined"
                          required
                          fullWidth
                          label="Email"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          onChange={handleChange}
                          type="text"
                          autoComplete="fname"
                          name="phone"
                          variant="outlined"
                          required
                          fullWidth
                          label="Phone number"
                          autoFocus
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        component="h1"
                        variant="h5"
                        style={{ color: "red !important" }}
                      >
                        {formError}
                      </Typography>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "30px" }}
                    >
                      contact
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
