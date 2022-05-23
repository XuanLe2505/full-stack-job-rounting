import { Grid } from "@mui/material";
import React from "react";
import CompanyCard from "./CompanyCard";

function JobList({ companiesInfo, setRemovedCompanyId }) {
  return (
    <>
      <Grid container spacing={2}>
        {companiesInfo &&
          companiesInfo.companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              setRemovedCompanyId={setRemovedCompanyId}
            />
          ))}
      </Grid>
    </>
  );
}

export default JobList;
