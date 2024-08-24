import { useEffect, useState, useCallback } from "react";
import useConversation from "../hook/useConversation.js";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const getMessages = useCallback(async () => {
    if (!selectedConversation?._id) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/messages/${selectedConversation._id}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      toast.error(error.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  }, [selectedConversation?._id, setMessages]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return { messages, loading };
};

export default useGetMessages;
