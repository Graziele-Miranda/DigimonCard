import React, { createContext, useContext, useState, useEffect } from "react";
import { LoadDigimonsFromApi } from "../services/Api";

const DigimonContext = createContext();

export function useDigimonContext() {
  return useContext(DigimonContext);
}

export function DigimonProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [digimonList, setDigimonList] = useState([]);
  const [error, setError] = useState(null); // Adicione a variável error

  useEffect(() => {
    LoadDigimonsFromApi()
      .then((data) => setDigimonList(data))
      .catch((error) => {
        setError(
          "Ocorreu um erro ao carregar os Digimons. Por favor, tente novamente mais tarde."
        );
      });
  }, []);

  return (
    <DigimonContext.Provider
      value={{
        search,
        setSearch,
        searchField,
        setSearchField,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        digimonList,
        error, // Inclua a variável error no contexto
      }}
    >
      {children}
    </DigimonContext.Provider>
  );
}

export default DigimonContext;
