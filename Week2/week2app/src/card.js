function Card(props) {
  return (
    <div className="card" style={
  {
  backgroundColor: props.BGcolor,
  width: props.wide+"px",
  }
}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

  export default Card;