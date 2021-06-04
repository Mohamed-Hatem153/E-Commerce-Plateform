import "./title.scss";

const Title = ({ title, main }) => {
  return (
    <div className="title__main">
      <div className="title__line"></div>
      <h3 className="title__heading">{title}</h3>
      <div className="title__line"></div>
    </div>
  );
};

export default Title;
