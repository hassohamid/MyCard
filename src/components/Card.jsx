function Card() {
  return (
    <div className="container">
      <div className="cardheader">
        <img className="profilepic" src="me.jpeg" />
        <h1 className="myname">hasso</h1>
        <h3 className="description">Stockholm, Sweden</h3>
      </div>
      {/* <h1 className="job">Software Engineer</h1> */}
      {/* <hr /> */}
      <div className="languages">
        <img className="languagelogo" src="react-color.svg" alt="React" />
        <img
          className="languagelogo"
          src="javascript-color.svg"
          alt="JavaScript"
        />
        <img
          className="languagelogo"
          src="tailwindcss-color.svg"
          alt="Tailwind"
        />
        <img className="languagelogo" src="git-color.svg" alt="Git" />
        <img className="languagelogo" src="figma-color.svg" alt="Figma" />
        <img className="languagelogo" src="html.svg" alt="" />
      </div>
      <div className="cardfooter">
        <h1> Let's Connect. </h1>
        <a href="https://github.com/hassohamid/" target="_blank">
          <img className="sociallogo" src="/github-color.svg" />
        </a>
        <a href="https://www.linkedin.com/in/hassohamid/" target="_blank">
          <img className="sociallogo" src="/linkedin-color.svg" />
        </a>
        <a href="https://discord.gg/7xQPvBd7" target="_blank">
          <img className="sociallogo" src="/discord-color.svg" />
        </a>
      </div>
      <hr className="bottomline" />
    </div>
  );
}

export default Card;
