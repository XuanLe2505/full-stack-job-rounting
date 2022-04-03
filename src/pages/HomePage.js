import { Container } from "@mui/material";
import React from "react";
import JobList from "../components/JobList";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [jobsInfo, setJobsInfo] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await apiService.get("/jobs");
        setJobsInfo(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getJobs();
  }, []);

  return (
    <>
      <Container sx={{ mt: 3 }}>
        <JobList jobsInfo={jobsInfo} error={error} loading={loading} />
      </Container>
    </>
  );
}

export default HomePage;
