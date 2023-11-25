import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/App.css";

import DigimonContext from "../context/DigimonContext";

class ComponentCard extends Component {
  static contextType = DigimonContext;
  render() {
    // Acesse a propriedade que contém a matriz de Digimons
    const { digimonList } = this.context;

    if (!Array.isArray(digimonList)) {
      return null; // Ou qualquer outro tratamento de erro desejado
    }

    const digimonCards = digimonList.map((digimon, index) => (
      <Card
        className="digimon-card"
        key={index}
        sx={{ backgroundColor: "#eead2d", color: "#FFF", borderRadius: "15px" }}
      >
        <CardContent className="card-content">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              fontSize: "25px",
            }}
          >
            {digimon.name}
          </Typography>
          <img src={digimon.img} alt={digimon.name} className="digimon-image" />
        </CardContent>
        <Typography
          className="subtitle1"
          variant="subtitle1"
          sx={{
            fontFamily: "Helvetica",
            fontSize: "15px",
          }}
        >
          Level: {digimon.level}
        </Typography>
      </Card>
    ));

    return <div className="digimon-list">{digimonCards}</div>;
  }
}

export default ComponentCard;
