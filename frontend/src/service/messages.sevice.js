const handleSendMessage = async (conversationId,message)=>{
    return await fetch(`/api/messages/send/${conversationId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });
}

export {
    handleSendMessage,
}