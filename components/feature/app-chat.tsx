"use client";
import { ChatLayout } from "@/components/ui/chat-layout";
import { InputAdornment, IconButton, OutlinedInput } from "@mui/material";
import { Send } from "lucide-react";
import { useState } from "react";

type AppChatProps = {
    chatMessage: string;
    setChatMessage: (message: string) => void;
    onSendMessage: (message: string) => void;
    children: React.ReactNode;
};

export const AppChat = ({
    chatMessage,
    setChatMessage,
    onSendMessage, 
    children 
}: AppChatProps) => {
    const handleSendPrompt = () => {
        onSendMessage(chatMessage);
        setChatMessage('');
    };

    return (
        <ChatLayout  mainArea={
            <>
                {children}
            </>
        } chatArea={
            <div className="flex p-2">
                <OutlinedInput
                    fullWidth
                    multiline
                    rows={3}
                    
                    placeholder="start chatting"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={'Send prompt'}
                                onClick={handleSendPrompt}
                                edge="end"
                            >
                                <Send />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
        }/>
    )
}