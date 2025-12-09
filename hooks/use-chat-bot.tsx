"use client";
import { useEffect, useRef, useState } from "react";
import type { Message } from "@/types/message";
import { useAppSession } from "@/context/app-session-context";

export const useChatBot = () => {
    const { activeSession, updateActiveSessionMessages } = useAppSession();
    const [addMessage, setAddMessage] = useState<Message | null>(null);
    const latestRequest = useRef<number | null>(null);

    useEffect(() => {
        if (!addMessage) {
            return;
        }

        const currentRequest = latestRequest.current ? latestRequest.current + 1 : 1;
        latestRequest.current = currentRequest;
        if (addMessage.actor === 'user') {
            (async () => {
                const newMessage: Message = {
                    id: crypto.randomUUID(),
                    content: 'I am thinking...',
                    actor: 'assistant',
                    createdAt: new Date()
                };
                updateActiveSessionMessages([...(activeSession?.messages ?? []), newMessage]);
                setAddMessage(null);
            })();
        }
    }, [addMessage]);

    return {
        messages: {
            sendMessage: (message: string) => {
                const newMessage: Message = {
                    id: crypto.randomUUID(),
                    content: message,
                    actor: 'user',
                    createdAt: new Date()
                };
                updateActiveSessionMessages([...(activeSession?.messages ?? []), newMessage]);
                setAddMessage(newMessage);
            },
            messages: activeSession?.messages ?? [],
        }
    }
}