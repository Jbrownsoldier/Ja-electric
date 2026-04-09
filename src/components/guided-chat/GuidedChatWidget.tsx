import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronLeft, ChevronRight, MessageCircle, Phone, RotateCcw, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { company, companyLinks } from '../../config/company';
import { useGuidedChat } from '../../context/GuidedChatContext';
import { useQuoteModal, type QuoteDraft } from '../../context/QuoteContext';
import { buildQuoteSummary, getChatNode, type ChatSelections } from './flow';

type TranscriptEntry =
  | { id: string; type: 'bot'; text: string }
  | { id: string; type: 'user'; text: string };

interface Snapshot {
  nodeId: string;
  selections: ChatSelections;
  transcript: TranscriptEntry[];
}

const CHAT_DISMISS_KEY = 'ja_chat_dismissed';

export function GuidedChatWidget() {
  const navigate = useNavigate();
  const { isOpen, openChat, closeChat } = useGuidedChat();
  const { isOpen: isQuoteOpen, openQuoteModal } = useQuoteModal();
  const [nodeId, setNodeId] = useState('home');
  const [selections, setSelections] = useState<ChatSelections>({ source: 'guided-chat' });
  const [history, setHistory] = useState<Snapshot[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([
    { id: 'bot-home', type: 'bot', text: getChatNode('home', { source: 'guided-chat' }).message },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thinkingTimerRef = useRef<number | null>(null);

  const node = useMemo(() => getChatNode(nodeId, selections), [nodeId, selections]);

  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [isOpen, transcript, nodeId, isThinking]);

  useEffect(() => {
    return () => {
      if (thinkingTimerRef.current) {
        window.clearTimeout(thinkingTimerRef.current);
      }
    };
  }, []);

  const persistDismiss = () => {
    localStorage.setItem(CHAT_DISMISS_KEY, Date.now().toString());
  };

  const resetChat = () => {
    if (thinkingTimerRef.current) {
      window.clearTimeout(thinkingTimerRef.current);
      thinkingTimerRef.current = null;
    }

    const initialSelections = { source: 'guided-chat' } as ChatSelections;
    setIsThinking(false);
    setSelections(initialSelections);
    setHistory([]);
    setNodeId('home');
    setTranscript([
      { id: 'bot-home', type: 'bot', text: getChatNode('home', initialSelections).message },
    ]);
  };

  const handleClose = () => {
    if (thinkingTimerRef.current) {
      window.clearTimeout(thinkingTimerRef.current);
      thinkingTimerRef.current = null;
    }
    setIsThinking(false);
    persistDismiss();
    closeChat();
  };

  const handleBack = () => {
    if (isThinking) return;

    const previous = history[history.length - 1];
    if (!previous) return;

    setHistory((current) => current.slice(0, -1));
    setNodeId(previous.nodeId);
    setSelections(previous.selections);
    setTranscript(previous.transcript);
  };

  const openQuoteFromSelections = (nextSelections: ChatSelections) => {
    const draftSummary = buildQuoteSummary(nextSelections);
    const draft: QuoteDraft = {
      service_type: nextSelections.serviceLabel ?? '',
      message: draftSummary,
      technical_notes: '',
      metadata: {
        serviceId: nextSelections.serviceId,
        need: nextSelections.need,
        urgency: nextSelections.urgency,
        propertyType: nextSelections.propertyType,
        area: nextSelections.area,
        source: 'guided-chat',
      },
    };

    persistDismiss();
    closeChat();
    openQuoteModal(draft);
  };

  const handleOptionSelect = (option: (typeof node.options)[number]) => {
    if (isThinking) return;

    const nextSelections = { ...selections, ...option.patch };

    if (option.action === 'call') {
      persistDismiss();
      window.location.href = companyLinks.phone;
      return;
    }

    if (option.action === 'route' && option.route) {
      persistDismiss();
      closeChat();
      navigate(option.route);
      return;
    }

    if (option.action === 'quote') {
      openQuoteFromSelections(nextSelections);
      return;
    }

    if (option.action === 'restart') {
      resetChat();
      return;
    }

    if (!option.next) return;

    const nextNode = getChatNode(option.next, nextSelections);
    const nextTranscript = [
      ...transcript,
      { id: `user-${transcript.length}`, type: 'user' as const, text: option.label },
    ];

    setHistory((current) => [
      ...current,
      {
        nodeId,
        selections,
        transcript,
      },
    ]);
    setTranscript(nextTranscript);
    setIsThinking(true);

    thinkingTimerRef.current = window.setTimeout(() => {
      setSelections(nextSelections);
      setNodeId(option.next as string);
      setTranscript((current) => [
        ...current,
        { id: `bot-${current.length}`, type: 'bot', text: nextNode.message },
      ]);
      setIsThinking(false);
      thinkingTimerRef.current = null;
    }, 2000);
  };

  if (isQuoteOpen) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed right-4 md:right-6 bottom-[6rem] md:bottom-6 z-[60] h-14 w-14 rounded-full bg-secondary text-slate-50 shadow-[0_16px_40px_rgba(18,146,232,0.34)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Open guided assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed right-4 md:right-6 bottom-[6rem] md:bottom-24 z-[70] w-[calc(100vw-2rem)] max-w-[24rem] rounded-2xl border border-secondary/30 bg-surface-container-low shadow-[0_30px_80px_rgba(0,0,0,0.48)] overflow-hidden"
          >
            <div className="border-b border-white/5 bg-slate-950/70 px-4 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 border border-secondary/25 text-secondary">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-headline font-black uppercase tracking-wide text-sm">
                      Guided Assistant
                    </h3>
                    <p className="text-slate-400 text-xs">
                      Button-only help for quotes, services, and FAQs
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label="Close guided chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="max-h-[58vh] overflow-y-auto px-4 py-4 space-y-3 bg-primary/70">
              {transcript.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex ${entry.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      entry.type === 'bot'
                        ? 'bg-surface border border-white/5 text-slate-200'
                        : 'bg-secondary text-slate-50'
                    }`}
                  >
                    {entry.text}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed bg-surface border border-white/5 text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400 text-xs uppercase tracking-[0.18em]">Typing</span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-bounce [animation-delay:-0.2s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-bounce [animation-delay:-0.1s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-bounce" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {nodeId === 'quote-handoff' && (
                <div className="rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-3 text-xs text-slate-200 whitespace-pre-line">
                  {buildQuoteSummary(selections)}
                </div>
              )}
            </div>

            <div className="border-t border-white/5 bg-surface px-4 py-4 space-y-3">
              <div className={`grid gap-2 ${node.options.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {node.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isThinking}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left text-sm font-semibold text-slate-100 hover:border-secondary/40 hover:bg-secondary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <a
                href={companyLinks.phone}
                className="flex items-center justify-center gap-2 rounded-xl border border-secondary/35 bg-secondary/10 px-4 py-3 text-sm font-headline font-bold uppercase tracking-widest text-secondary hover:bg-secondary/15 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Talk to a Human
              </a>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handleBack}
                  disabled={history.length === 0 || isThinking}
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-widest text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={resetChat}
                  disabled={isThinking}
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-widest text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart
                </button>
                <button
                  onClick={() => handleOptionSelect({ id: 'footer-quote', label: 'Get a Quote', next: 'quote-service' })}
                  disabled={isThinking}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-headline font-black uppercase tracking-widest text-slate-50 shadow-[0_0_20px_rgba(18,146,232,0.24)] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get Quote
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                {company.name} // {company.serviceAreaShort}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
