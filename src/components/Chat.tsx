import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Talk from 'talkjs';


const APP_ID = 'tPu8DfPS';

export const Chat = () => {
    const chatboxEl = useRef(null);

    // wait for TalkJS to load
    const [talkLoaded, markTalkLoaded] = useState(false);
  
    useEffect(() => {
      Talk.ready.then(() => markTalkLoaded(true));
  
      if (talkLoaded) {
        const currentUser = new Talk.User({
          id: '1',
          name: 'Henry Mill',
          email: 'obasiuche62@gmail.com',
          photoUrl: 'henry.jpeg',
          welcomeMessage: 'Hello!',
          role: 'default',
        });
  
        const otherUser = new Talk.User({
          id: '2',
          name: 'Jessica Wells',
          email: 'jessicawells@example.com',
          photoUrl: 'jessica.jpeg',
          welcomeMessage: 'Hello!',
          role: 'default',
        });
  
        const session = new Talk.Session({
          appId: APP_ID,
          me: currentUser,
        });
  
        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);
  
        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(chatboxEl.current);
  
        return () => session.destroy();
      }
    }, [talkLoaded]);
  
    return <div ref={chatboxEl} />;
}