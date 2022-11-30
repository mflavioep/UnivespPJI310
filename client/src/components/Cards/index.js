import React from "react";
import axios from "axios";
import "./card.css";

export default function Cards(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="card-container">
      <h3 className="card-title">{props.nome}</h3>
      <p className="card-desc">{props.descricao}</p>      
      <p><a href={"http://192.168.31.65:3001/gid/"+props.link_publicacao} >{props.link_publicacao}</a></p>
    </div>
  );
}
