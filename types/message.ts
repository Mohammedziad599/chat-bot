export type Message = {
    id: string;
    content: string;
    actor: 'user' | 'assistant';
    createdAt: Date;
}