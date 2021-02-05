import React, { createContext, useContext } from "react";

const SanityDataContext = createContext(undefined);

interface SanityDataProviderProps {
  data: any;
}

export const SanityDataProvider: React.FC<SanityDataProviderProps> = ({
  children,
  data,
}) => {
  return (
    <SanityDataContext.Provider value={data}>
      {children}
    </SanityDataContext.Provider>
  );
};

export function useSanityData<DataType>() {
  const context = useContext(SanityDataContext);

  if (context === undefined) {
    throw new Error("useSanityData must be used within a SanityDataProvider");
  }

  return context as DataType;
}
