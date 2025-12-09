# Chat bot

## How to install and run:
- Run `npm install`
- Run `npm run dev`

## List of missing features:
- artifacts concepts

## areas of enchancement:
- integrate rich text editor to send messages
- abort mechanism for async operation in the chat bot
- consider mobile devices with the design, as it is now more of a tablet/pc application.

## structure
- app
    - layout - contains the layout of the page
    - page - contains the app chat component
- components
    - feature
        - app-chat - the main chat component of the application
        - app-sidebar - contains the sessions management of the chat app
    - ui
        - button - generated from shadcn
        - chat-layout - has the chat page layouting
        - input - generated from shadcn
        - message-box - include the message box that include either the user message or the system message
        - message-row - this is a holder of the message-box, has an edit button for the messages
        - separator - generated from shadcn
        - sheet - generated from  shadcn
        - sidebar - generated from shadcn
        - skeleton - generated from shadcn
        - tooltip -generated from shadcn
- context
    - app-session-context - this is used to manage the user sessions which each session include a list of messages
- hooks
    - use-chat-bot - this is used to manage the messages of the chat bot

## Used tech:
- Next.js
- React
- Tailwindcss 4
- Mui
- shadcn (install what you need ui library)

