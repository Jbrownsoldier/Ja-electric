import { createContext, useContext, useState, type ReactNode } from 'react';

export interface QuoteDraft {
  service_type?: string;
  message?: string;
  technical_notes?: string;
  metadata?: {
    serviceId?: string;
    need?: string;
    urgency?: string;
    propertyType?: string;
    area?: string;
    source?: string;
  };
}

interface QuoteContextType {
  isOpen: boolean;
  draft: QuoteDraft | null;
  openQuoteModal: (draft?: QuoteDraft) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<QuoteDraft | null>(null);

  const openQuoteModal = (nextDraft?: QuoteDraft) => {
    setDraft(nextDraft ?? null);
    setIsOpen(true);
  };
  const closeQuoteModal = () => {
    setIsOpen(false);
    setDraft(null);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, draft, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteProvider');
  }
  return context;
};
