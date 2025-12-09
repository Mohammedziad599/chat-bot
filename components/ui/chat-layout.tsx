type ChatLayoutProps = {
    chatArea: React.ReactNode,
    mainArea: React.ReactNode
}

export const ChatLayout = (
    { chatArea, mainArea }: ChatLayoutProps
) => {
    return (
        <div className="chat-layout grid h-full">
            <div className="main-area">
                {mainArea}
            </div>
            <div className="chat-area">
                {chatArea}
            </div>
        </div>
    )
}