import { Container, Alert, Pagination, Box } from "@mui/material";
import React from "react";
import JobList from "../components/CompanyList";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [companiesInfo, setCompaniesInfo] = useState("");
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [removedCompanyId, setRemovedCompanyId] = useState("");

  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`/companies?page=${page}`);
        setCompaniesInfo(res.data.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getCompanies();
  }, [page, removedCompanyId]);

  useEffect(() => {
    const deleteCompany = async () => {
        await apiService.delete(`/companies/${removedCompanyId}`);
    };
    deleteCompany();
    setRemovedCompanyId("");
  }, [removedCompanyId]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const pageCount = companiesInfo.totalPages;

  console.log(companiesInfo);
  console.log(page);

  return (
    <>
      <Container sx={{ mt: 5 }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <>
                <JobList
                  companiesInfo={companiesInfo}
                  setRemovedCompanyId={setRemovedCompanyId}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                    mb: 3,
                  }}
                >
                  <Pagination
                    count={pageCount}
                    page={page}
                    onChange={handleChange}
                  />
                </Box>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
}

export default HomePage;
