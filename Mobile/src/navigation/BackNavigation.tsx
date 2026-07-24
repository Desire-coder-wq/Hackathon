import { createContext, ReactNode, useContext } from 'react';

const BackNavigationContext = createContext<(() => void) | null>(null);

export function BackNavigationProvider({ onBack, children }: { onBack: () => void; children: ReactNode }) {
  return <BackNavigationContext.Provider value={onBack}>{children}</BackNavigationContext.Provider>;
}

export function useBackNavigation() {
  return useContext(BackNavigationContext);
}
