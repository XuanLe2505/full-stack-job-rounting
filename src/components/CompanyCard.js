import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

function CompanyCard({ company, setRemovedCompanyId }) {
  const location = useLocation();
  const navigate = useNavigate();
  const removeCompany = (companyId) => {
    setRemovedCompanyId(companyId);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275, minHeight: 250, position: "relative" }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 16,
              mb: 1,
              borderBottom: 1,
              textAlign: "center",
            }}
            color="text.secondary"
            gutterBottom
            noWrap
          >
            {company.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {company.description.length > 250
              ? `${company.description.slice(0, 250)}...`
              : company.description}
          </Typography>
          {/* {company.skills.slice(0, 4).map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: "#F0534A",
                color: "white",
                height: 28,
                fontSize: 13,
              }}
            />
          ))} */}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            variant="contained"
            sx={{
              position: "absolute",
              bottom: 20,
              bgcolor: "#FC9918",
              color: "#000",
              fontSize: 12,
            }}
            to={`/companies/${company.id}`}
            onClick={() => navigate(`/companies/${company.id}`)}
            state={{ backgroundLocation: location }}
          >
            Learn More
          </Button>
        </CardActions>
        <Button
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: "#F0534A",
            color: "secondary.contrastText",
            padding: "0",
            minWidth: "1.5rem",
          }}
          size="small"
          onClick={() => removeCompany(company.id)}
        >
          &times;
        </Button>
      </Card>
    </Grid>
  );
}

export default CompanyCard;
