// src/components/admin/utils/ReusableSearch.tsx
import React, { useState, useMemo } from "react";
import { TextField, InputAdornment, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface ReusableSearchProps<T> {
  data: T[];
  keys: (keyof T)[];
  placeholder?: string;
  onSelect: (item: T) => void;
  width?: string | number;
  renderInput?: (props: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => React.ReactNode; // new
}

function ReusableSearch<T extends object>({
  data,
  keys,
  placeholder = "Search...",
  onSelect,
  width = 300,
  renderInput,
}: ReusableSearchProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return [];
    return data.filter(item =>
      keys.some(key =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data, keys]);

  return (
    <div style={{ width, position: "relative" }}>
      {renderInput ? (
        renderInput({ value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })
      ) : (
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}

      {filteredData.length > 0 && (
        <Paper style={{ position: "absolute", top: 40, width: "100%", maxHeight: 200, overflowY: "auto", zIndex: 1000 }}>
          <List dense>
            {filteredData.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onSelect(item);
                    setSearchTerm("");
                  }}
                >
                  <ListItemText primary={item[keys[0]] as unknown as string} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default ReusableSearch;
