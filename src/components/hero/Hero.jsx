import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <img
        className="hero_img"
        src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2406&q=80"
        alt="market in town"
      />

      <h1 className="hero_title">Sei nel posto giusto</h1>
      <h2 className="hero_subtitle">Tutto ció di cui hai bisogno é qui.</h2>
    </div>
  );
};

export default Hero;
