"use client";

import { createContext, useState, useContext, useEffect } from "react";
import type { Message } from "@/types/message";

export type Session = {
    id: string;
    title: string;
    messages: Message[];
}

export const AppSessionContext = createContext<{
    activeSession: Session | null;
    sessions: Session[];
    addNewSession: () => void;
    setActiveSession: (session: Session | null) => void;
    updateActiveSessionMessages: (messages: Message[]) => void;
    removeSession: (sessionId: string) => void;
}>({
    activeSession: null,
    sessions: [],
    addNewSession: () => {},
    setActiveSession: () => {},
    updateActiveSessionMessages: () => {},
    removeSession: () => {},
});

export const AppSessionProvider = ({ children }: { children: React.ReactNode }) => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [activeSession, setActiveSession] = useState<Session | null>(sessions.length > 0 ? sessions[0] : null);
    const addNewSession = () => {
        const newSession: Session = { id: crypto.randomUUID(), title: 'New Session ' + (sessions.length + 1), messages: [] };
        setSessions((prev) => {
            return [...prev, newSession];
        });  
        setActiveSession(newSession);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    };

    const updateActiveSessionMessages = (messages: Message[]) => {
        const updatedSession = sessions.find((session) => session.id === activeSession?.id);
        if (!updatedSession) {
            throw new Error('Session not found');
        }
        updatedSession.messages = messages;
        setSessions((prev) => {
            return prev.map((session) => {
                if (session.id === updatedSession.id) {
                    return updatedSession;
                }
                return session;
            });
        });
        setActiveSession(updatedSession);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }

    useEffect(() => {
        const storedSessions: Session[] = localStorage.getItem('sessions') ? JSON.parse(localStorage.getItem('sessions') ?? '[]') : [];
        setSessions((prev) => {
            return [...prev, ...storedSessions];
        });
        setActiveSession(storedSessions.length > 0 ? storedSessions[0] : null);
    }, []);

    const removeSession = (sessionId: string) => {
        setSessions((prev) => {
            return prev.filter((session) => session.id !== sessionId);
        });
        localStorage.setItem('sessions', JSON.stringify(sessions));
        if (activeSession?.id === sessionId) {
            setActiveSession(sessions.length > 0 ? sessions[0] : null);
        }
    }

    return <AppSessionContext.Provider value={{
        activeSession,
        sessions,
        addNewSession,
        setActiveSession,
        updateActiveSessionMessages,
        removeSession
    }}>
        {children}
    </AppSessionContext.Provider>;
};


export const useAppSession = () => {
    const context = useContext(AppSessionContext);
    if (!context) {
        throw new Error('useAppSession must be used within a AppSessionProvider');
    }
    return context;
};