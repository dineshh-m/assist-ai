export type Message = {
    id: string
    content: Auxilary
}

export type Auxilary = {
    role: 'user' | 'model'
    parts: { text: string }[]
}

export type MessageInfo = {
    id: string
    title: string
}