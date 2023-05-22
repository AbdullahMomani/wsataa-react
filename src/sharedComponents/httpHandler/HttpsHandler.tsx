import React from "react";
import { Alert, Box, CircularProgress } from "@mui/material";

export const HttpsHandler = ({ loading, error, entities, children }: any) => {
  return (
    <>
      {loading == "pending" ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert variant="filled" severity="error">
          {error.message || error}
        </Alert>
      ) : entities ? (
        children
      ) : null}
    </>
  );
};

