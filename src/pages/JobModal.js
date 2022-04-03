import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Chip } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* <Typography
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
          {jobsInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {jobsInfo.description}
        </Typography>
        {jobsInfo.skills.slice(0, 4).map((skill) => (
          <Chip
            label={skill}
            sx={{
              mr: 1,
              mb: 1,
              backgroundColor: "#F0534A",
              color: "white",
            }}
          />
        ))} */}
      </Box>
    </Modal>
  );
}
