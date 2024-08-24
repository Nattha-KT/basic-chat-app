import { create } from "zustand";

const useConversation = create()((set) => ({
  selectedConversation: null,
  messages: [],
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  setMessages: (selectedMessage) => set({ selectedMessage }),
}));

export default useConversation;
