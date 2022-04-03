import React from "react";
import { Chip, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

function JobCard({ job }) {
  const location = useLocation();
  return (
    <Grid item xs={4}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontSize: 14 }} gutterBottom noWrap>
            {job.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.description.length > 120
              ? `${job.description.slice(0, 120)}...`
              : job.description}
          </Typography>
          {job.skills.slice(0, 2).map((skill) => (
            <Chip label={skill} />
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              to={`/jobs/${job.id}`}
              state={{ backgroundLocation: location }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JobCard;
