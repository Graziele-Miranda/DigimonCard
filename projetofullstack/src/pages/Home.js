import React, { useEffect, useMemo, useState } from "react";
import Container from "@mui/material/Container";
import PaginationBar from "../components/PaginationBar";
import Header from "../components/Header";
import ComponentCard from "../components/Card";
import Search from "../components/Search";
import Grid from "@mui/material/Grid";
import { useDigimonContext } from "../context/DigimonContext";
import { LoadDigimonsFromApi } from "../services/Api";

function Home() {
  const {
    search,
    setSearch,
    searchField,
    setSearchField,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    digimonList,
  } = useDigimonContext();

  const [error, setError] = useState(null);

  useEffect(() => {
    LoadDigimonsFromApi().catch((error) => {
      setError(
        "Ocorreu um erro ao carregar os Digimons. Por favor, tente novamente mais tarde."
      );
    });
  }, []);

  const filteredDigimonList = useMemo(() => {
    return digimonList.filter((digimon) => {
      const searchValue = search.toLowerCase();
      const fieldValue = digimon[searchField].toString().toLowerCase();
      return fieldValue.includes(searchValue);
    });
  }, [digimonList, search, searchField]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDigimonList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <Header />
      <Container className="container">
        <Search
          search={search}
          setSearch={setSearch}
          searchField={searchField}
          setSearchField={setSearchField}
        />
        <div className="digimon-list">
          <ComponentCard />
        </div>
        <Grid container justifyContent="center">
          <PaginationBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            pageCount={Math.ceil(filteredDigimonList.length / itemsPerPage)}
            backgroundColor="#0000CD"
            textColor="#fff"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
