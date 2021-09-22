import { Button } from "@material-ui/core";
import { useProfile } from "../context";
import Repositories from "../Repositories";

const Profile = (props) => {
  const { repositories, handleSetRepositories } = useProfile();

  const getRepos = () => {
    const axios = require("axios");

    axios
      .get("https://api.github.com/users/" + props.user.login + "/repos")
      .then((resp) => {
        handleSetRepositories(resp.data);
      });
  };
  return (
    <>
      <div>
        <img
          style={{
            borderRadius: "50%",
            width: "200px",
            border: "10px solid #fff",
            marginTop: "-120px",
          }}
          src={props.user.avatar_url}
          alt="profile photography"
        />
        <h2>Login: {props.user.login}</h2>
        <h2>Full name: {props.user.name}</h2>
        <Button onClick={getRepos}>Repositories</Button>
      </div>
      <div style={{ overflow: "auto", maxHeight: "500px" }}>
        {repositories &&
          repositories?.map((repo) => <Repositories repos={repo} />)}
      </div>
    </>
  );
};
export default Profile;
