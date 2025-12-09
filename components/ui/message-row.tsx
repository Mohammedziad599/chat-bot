"use client";

import type { Message } from "@/types/message";
import { MessageBox } from "./message-box";
import { Button } from "./button";
import { PencilIcon } from "lucide-react";

type MessageRowProps = {
    message: Message;
    editMessage: (message: Message) => void;
}

export const MessageRow = ({
    message,
    editMessage
}: MessageRowProps) => {
    return (
        <div className={`message-row flex ${message.actor === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
            {message.actor === 'user' && (
                <div className="flex items-center justify-center">
                    <Button variant="outline" size="icon" onClick={() => {editMessage(message)}}>
                        <PencilIcon className="size-4" />
                    </Button>
                </div>
            )}
            <MessageBox message={message} />
        </div>
    )
}