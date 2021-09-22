import { TextField, Button, Container } from "@material-ui/core";
import { Box, styled } from "@material-ui/system";
import { Controller, useForm } from "react-hook-form";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useProfile } from "../context";
import Profile from "../Profile";

const Menu = () => {
  const { handleSubmit, control } = useForm();
  const { profile, handleSetProfile } = useProfile();

  const requestProfile = async (data) => {
    const axios = require("axios");

    axios.get("https://api.github.com/users/" + data.profile).then((resp) => {
      handleSetProfile(resp.data);
    });
  };

  return (
    <>
      <div
        className={"header"}
        style={{
          backgroundColor: "#708090",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <h1>
          <GitHubIcon
            sx={{ fontSize: 40 }}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
          GitHub Profiles Render
        </h1>
        <form onSubmit={handleSubmit(requestProfile)}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Controller
              control={control}
              name="profile"
              rules={{ required: true }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState: { errors },
              }) => (
                <TextField
                  style={{ borderColor: "#fff" }}
                  required
                  fullWidth
                  size="small"
                  value={value || ""}
                  onBlur={onBlur}
                  variant="outlined"
                  onChange={onChange}
                  error={!!errors?.profile}
                  label={"Profile"}
                  color={"warning"}
                />
              )}
            />
            <Button
              style={{ lineHeight: "2", width: "80px" }}
              variant="contained"
              type="submit"
            >
              Search
            </Button>
          </Box>
        </form>
      </div>

      <Container style={{ width: "50%", marginTop: "20px" }}>
        {profile && <Profile user={profile} />}
      </Container>
      <Container
        className={"footer"}
        style={{
          backgroundColor: "#708090",
          width: "100%",
          color: "#fff",
          maxWidth: "100%",
          position: "absolute",
          bottom: "0",
        }}
      >
        <h4>System to search git hub profile and repositories by username!</h4>
      </Container>
    </>
  );
};

export default Menu;
