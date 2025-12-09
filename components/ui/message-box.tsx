import { Box, Typography } from "@mui/material";
import type { Message } from "@/types/message";

type MessageBoxProps = {
    message: Message;
}
export const MessageBox = ({
    message
}: MessageBoxProps) => {
    return (
        <Box className="message-box px-3 py-2" sx={{
            backgroundColor: message.actor === 'user' ? 'primary.main' : '#e0e0e0',
            color: message.actor === 'user' ? 'white' : 'black',
            borderRadius: 2,
        }}>
            <Typography variant="body1" className="text-sm">{message.content}</Typography>
        </Box>
    )
}