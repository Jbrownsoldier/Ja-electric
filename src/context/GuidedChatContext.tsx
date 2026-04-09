import { createContext, useContext, useState, type ReactNode } from 'react';

interface GuidedChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const GuidedChatContext = createContext<GuidedChatContextType | undefined>(undefined);

export const GuidedChatProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  return (
    <GuidedChatContext.Provider value={{ isOpen, openChat, closeChat }}>
      {children}
    </GuidedChatContext.Provider>
  );
};

export const useGuidedChat = () => {
  const context = useContext(GuidedChatContext);
  if (context === undefined) {
    throw new Error('useGuidedChat must be used within a GuidedChatProvider');
  }
  return context;
};
