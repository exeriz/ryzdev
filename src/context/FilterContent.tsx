import { createContext, useState, useContext, ReactNode, useMemo } from "react";

interface FilterContextType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterContext = createContext<FilterContextType>({
  category: "all",
  setCategory: () => {},
});

function FilterProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [category, setCategory] = useState<string>("all");

  const value = useMemo(() => ({ category, setCategory }), [category]);

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used inside the FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilterContext };
