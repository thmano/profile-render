const Repositories = (props) => {
  return (
    <>
      <div
        className={"repositorie"}
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          width: "200px",
          height: "200px",
          float: "left",
          margin: "20px",
        }}
      >
        <h3>{props.repos.name}</h3>
        <h4>
          <a href={props.repos.clone_url} target="_blanck">
            Clone
          </a>
        </h4>
      </div>
    </>
  );
};

export default Repositories;
