import React, { useRef } from "react";
import { Link } from "react-router-dom";
const randomstring = require("randomstring");

const GenerateAnnonymousLink = () => {
  const formRef = useRef();
  const AnonymusLink = React.createRef();
  const baseUrl = "desginyourownusabilitytes.com/";
  const url = baseUrl + randomstring.generate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = formRef.current;
    form.innerHTML = "";

    const Alink = AnonymusLink.current;
    Alink.innerHTML = url;
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary">
          Annonymous Link
        </button>
      </form>
      <Link ref={AnonymusLink} to={url} className="nav-link"></Link>
    </div>
  );
};

export default GenerateAnnonymousLink;