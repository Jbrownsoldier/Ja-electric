import { useEffect } from 'react';
import { useGuidedChat } from '../context/GuidedChatContext';
import { useQuoteModal } from '../context/QuoteContext';

export function EntryPopup() {
  const { openChat } = useGuidedChat();
  const { isOpen: isQuoteOpen } = useQuoteModal();

  useEffect(() => {
    const lastSeen = localStorage.getItem('ja_chat_dismissed');
    const now = new Date().getTime();
    
    if (lastSeen) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (now - parseInt(lastSeen) < sevenDays) {
        return;
      }
    }

    const timer = setTimeout(() => {
      if (!isQuoteOpen) {
        openChat();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isQuoteOpen, openChat]);

  return null;
}
