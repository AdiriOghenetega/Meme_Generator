export default function Generator(props) {
  return (
    <div className="gen">
      <div className="gen-inputs">
        <input
          type="text"
          className="inputed"
          placeholder="Top Text"
          value={props.top}
          onChange={props.change}
          name="topText"
        />

        <input
          className="inputed"
          type="text"
          placeholder="Bottom Text"
          value={props.bottom}
          onChange={props.change}
          name="bottmText"
        />
      </div>
      <button className="gen--button" onClick={props.switch}>
        Get a new meme image
      </button>
      <div className="text-img">
        <h3
          className="toptext"
          onClick={props.toggle}
          style={{ color: props.color ? "white" : "#8d1f3b " }}
        >
          {props.top}
        </h3>
        <img src={props.display} className="meme-images" />
        <h3
          className="bottomtext"
          onClick={props.toggle}
          style={{ color: props.color ? "white" : "#8d1f3b " }}
        >
          {props.bottom}
        </h3>
      </div>
    </div>
  );
}
