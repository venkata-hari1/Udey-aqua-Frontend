import { useState, useCallback } from "react";

interface UseCalendarFilterProps {
  initialMonth?: number;
  initialYear?: number;
}

interface UseCalendarFilterReturn {
  selectedMonth: number;
  selectedYear: number;
  openSelect: boolean;
  months: readonly string[];
  years: readonly number[];
  setSelectedMonth: (month: number) => void;
  setSelectedYear: (year: number) => void;
  setOpenSelect: (open: boolean) => void;
  handleMonthYearChange: (monthYearString: string) => void;
  getDisplayValue: () => string;
}

export const useCalendarFilter = ({
  initialMonth = 5,
  initialYear = 2025,
}: UseCalendarFilterProps = {}): UseCalendarFilterReturn => {
  const [selectedMonth, setSelectedMonth] = useState<number>(initialMonth);
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ] as const;

  const years = [2024, 2025, 2026] as const;

  const handleMonthYearChange = useCallback((monthYearString: string) => {
    const [month, year] = monthYearString.split("-");
    setSelectedMonth(Number(month));
    setSelectedYear(Number(year));
    setOpenSelect(false);
  }, []);

  const getDisplayValue = useCallback(() => {
    return `${months[selectedMonth]} ${selectedYear}`;
  }, [months, selectedMonth, selectedYear]);

  return {
    selectedMonth,
    selectedYear,
    openSelect,
    months,
    years,
    setSelectedMonth,
    setSelectedYear,
    setOpenSelect,
    handleMonthYearChange,
    getDisplayValue,
  };
};
