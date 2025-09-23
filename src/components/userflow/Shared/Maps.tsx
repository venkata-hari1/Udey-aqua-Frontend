// src/components/userflow/Shared/Maps.tsx
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Maps = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Our Locations
      </Typography>
      <Box sx={{ width: "100%", height: 480, borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
        <iframe
          title="Uday Aqua Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.457271794492!2d78.386881!3d17.438139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b2b6b1f1c1%3A0x0000000000000000!2sHyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate(-1)}>
        Back to site
      </Button>
    </Box>
  );
};

export default Maps;


