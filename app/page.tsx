"use client";
import { AppChat } from "@/components/feature/app-chat";
import { MessageRow } from "@/components/ui/message-row";
import { Container } from "@mui/material";
import { useChatBot } from "@/hooks/use-chat-bot";
import { useState } from "react";
export default function Home() {
  const { messages } = useChatBot();
  const [chatMessage, setChatMessage] = useState<string>('');

  return (
    <div className="h-full w-full">
      <AppChat
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        onSendMessage={(message) => {
          messages.sendMessage(message);
        }}
      >
        <Container maxWidth="lg" className="flex flex-col gap-2 p-4 h-full overflow-y-auto">
          {messages.messages.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">No messages yet</p>
            </div>
          )}
          {messages.messages.map((message) => (
            <MessageRow key={message.id} message={message} editMessage={(message) => {
              setChatMessage(message.content);
            }} />
          ))}
        </Container>
      </AppChat>
    </div>
  );
}
