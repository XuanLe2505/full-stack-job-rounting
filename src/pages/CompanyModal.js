import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { Alert } from "@mui/material";

const modalStyle = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "15px",
  zIndex: "1000",
  width: "100%",
  borderRadius: 4,
};
const overlayStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "65%",
  backgroundColor: "#fff",
  zIndex: "1000",
  borderRadius: 4,
  overflowY: "auto",
};

export default function CompanyModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };

  const [companiesInfo, setCompaniesInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getCompanies = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(`/companies/${params.id}`);
          console.log(res);
          setCompaniesInfo(res.data.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getCompanies();
    }
  }, [params]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Box sx={overlayStyle}>
                <Box sx={modalStyle}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      mb: 2,
                      borderBottom: 1,
                      textAlign: "center",
                      color: "#FC9918",
                    }}
                    gutterBottom
                  >
                    {companiesInfo.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2C3333",
                    }}
                  >
                    {companiesInfo.description}
                  </Typography>
                  {/* <Typography sx={{ mt: 1, mb: 1 }}>Skill:</Typography>
                  <Typography>
                    {companiesInfo.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: "#F0534A",
                          color: "#fff",
                          fontSize: 12,
                          height: 28,
                        }}
                      />
                    ))}
                  </Typography> */}
                  {/* <Typography sx={{ mt: 1, mb: 1, color: "#2C3333" }}>
                    City: {companiesInfo.city}
                  </Typography> */}
                  {/* <Typography
                    sx={{
                      color: "#2C3333",
                    }}
                  >
                    Salary: {companiesInfo.salaryLow} - {companiesInfo.salaryHigh} VNĐ
                  </Typography>
                  <Typography sx={{ mt: 1, mb: 1, color: "#2C3333" }}>
                    Posted: {companiesInfo.postedDate}
                  </Typography> */}
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </Modal>
  );
}
