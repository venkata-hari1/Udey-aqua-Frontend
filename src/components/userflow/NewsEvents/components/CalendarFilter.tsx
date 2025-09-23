// src/components/userflow/NewsEvents/components/CalendarFilter.tsx
import { Box, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useNewsEventsStyles from "../newsEventsStyles";
import calendarIcon2 from "../../../../assets/icons/calendar.svg";

interface CalendarFilterProps {
  selectedMonth: number;
  selectedYear: number;
  openSelect: boolean;
  months: readonly string[];
  years: readonly number[];
  onMonthYearChange: (monthYearString: string) => void;
  onOpenSelect: (open: boolean) => void;
  getDisplayValue: () => string;
  className?: string;
  pillClassName?: string;
  selectClassName?: string;
  menuPaperClassName?: string;
  menuListClassName?: string;
}

const CalendarFilter = ({
  selectedMonth,
  selectedYear,
  openSelect,
  months,
  years,
  onMonthYearChange,
  onOpenSelect,
  getDisplayValue,
  className,
  pillClassName,
  selectClassName,
  menuPaperClassName,
  menuListClassName,
}: CalendarFilterProps) => {
  const { classes } = useNewsEventsStyles();

  return (
    <Box className={className || classes.readMoreNewsHeaderRight}>
      <Box className={pillClassName || classes.readMoreNewsCalendarPill}>
        <Box
          component="img"
          src={calendarIcon2}
          alt="Calendar"
          width={16}
          height={16}
        />
        <Select
          value={`${selectedMonth}-${selectedYear}`}
          onChange={(e) => onMonthYearChange(String(e.target.value))}
          open={openSelect}
          onOpen={() => onOpenSelect(true)}
          onClose={() => onOpenSelect(false)}
          className={selectClassName || classes.readMoreNewsSelect}
          MenuProps={{
            PaperProps: {
              className: menuPaperClassName || classes.newsSelectMenuPaper,
            },
            MenuListProps: {
              className: menuListClassName || classes.newsSelectMenuList,
            },
            disableScrollLock: true,
          }}
          renderValue={() => (
            <Typography variant="body2">{getDisplayValue()}</Typography>
          )}
          IconComponent={KeyboardArrowDownIcon}
        >
          {years.map((y) =>
            months.map((_, mIdx) => (
              <MenuItem
                key={`${mIdx}-${y}`}
                value={`${mIdx}-${y}`}
                onClick={() => onOpenSelect(false)}
              >
                {months[mIdx]} {y}
              </MenuItem>
            ))
          )}
        </Select>
      </Box>
    </Box>
  );
};

export default CalendarFilter;
