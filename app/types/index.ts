import { Conversation , Message , User } from "@prisma/client";
import { BsFullscreen } from "react-icons/bs";

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessageType[],
};