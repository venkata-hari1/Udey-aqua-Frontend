// src/components/utils/TableFilter.tsx
import { Box, Button, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

type TableFilterProps = {
  columns: { key: string; label: string }[];
  onSortChange: (key: string, direction: 'asc' | 'desc') => void;
};

const TableFilter = ({ columns, onSortChange }: TableFilterProps) => {
  const [selectedColumn, setSelectedColumn] = useState<string>(columns[0].key);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSortToggle = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    onSortChange(selectedColumn, newDirection);
  };

  return (
    <Box display="flex" gap={2} mb={2}>
      <Select
        value={selectedColumn}
        onChange={(e) => setSelectedColumn(e.target.value)}
        size="small"
      >
        {columns.map((col) => (
          <MenuItem key={col.key} value={col.key}>
            {col.label}
          </MenuItem>
        ))}
      </Select>

      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        onClick={handleSortToggle}
      >
        Sort {sortDirection === 'asc' ? '▲' : '▼'}
      </Button>
    </Box>
  );
};

export default TableFilter;
