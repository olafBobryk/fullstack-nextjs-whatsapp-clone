"use client";

const conversations = [
  {
    initials: "AL",
    name: "Ava Laurent",
    preview: "The launch notes look great. Sending the final…",
    time: "10:42",
    unread: 2,
    tone: "coral",
  },
  {
    initials: "PT",
    name: "Product team",
    preview: "Noah: I moved our review to 2 PM",
    time: "09:18",
    unread: 0,
    tone: "blue",
  },
  {
    initials: "MB",
    name: "Maya Brooks",
    preview: "Photo",
    time: "Yesterday",
    unread: 0,
    tone: "violet",
  },
  {
    initials: "DR",
    name: "Design review",
    preview: "You: The new spacing feels much calmer",
    time: "Yesterday",
    unread: 0,
    tone: "amber",
  },
  {
    initials: "EL",
    name: "Elias Lane",
    preview: "Perfect, see you there!",
    time: "Tuesday",
    unread: 0,
    tone: "green",
  },
  {
    initials: "WK",
    name: "Weekend plans",
    preview: "Sofia: I found a place by the water",
    time: "Monday",
    unread: 0,
    tone: "rose",
  },
];

const messages = [
  { body: "Morning! Are we still good for the launch review?", time: "10:31", sent: false },
  { body: "Absolutely. I finished the final pass last night.", time: "10:34", sent: true },
  { body: "Nice. The new conversation layout feels much clearer.", time: "10:37", sent: false },
  { body: "Agreed — it keeps the important actions within reach.", time: "10:39", sent: true },
  { body: "The launch notes look great. Sending the final version now.", time: "10:42", sent: false },
];

function Icon({ name }) {
  const paths = {
    call: <path d="M6.6 2.9c.4-.4 1-.4 1.4-.1l2.1 1.6c.4.3.5.9.3 1.3L9.2 8c-.2.4-.1.8.2 1.1l3.5 3.5c.3.3.8.4 1.1.2l2.3-1.2c.5-.2 1-.1 1.3.3l1.6 2.1c.3.4.3 1-.1 1.4l-1.6 1.6c-.8.8-2 1.1-3 .7-2.7-1-5.1-2.6-7.2-4.7S3.6 8.5 2.6 5.8c-.4-1-.1-2.2.7-3L4.9 1.2" />,
    chat: <path d="M4 4h16v12H8l-4 4V4Z" />,
    dots: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    smile: <><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c1.8 2 5.2 2 7 0M9 9h.01M15 9h.01" /></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

export default function WhatsAppChat() {
  return (
    <div className="whatsapp-stage">
      <aside className="conversation-panel">
        <header className="panel-header">
          <div className="avatar avatar-green">OB</div>
          <div className="header-actions">
            <button aria-label="Start a new chat"><Icon name="chat" /></button>
            <button aria-label="More options"><Icon name="dots" /></button>
          </div>
        </header>

        <div className="search-row">
          <label className="search-box">
            <Icon name="search" />
            <input aria-label="Search conversations" placeholder="Search or start a new chat" />
          </label>
        </div>

        <div className="conversation-list">
          {conversations.map((conversation, index) => (
            <button className={`conversation ${index === 0 ? "active" : ""}`} key={conversation.name}>
              <div className={`avatar avatar-${conversation.tone}`}>{conversation.initials}</div>
              <span className="conversation-copy">
                <span className="conversation-topline">
                  <strong>{conversation.name}</strong>
                  <time>{conversation.time}</time>
                </span>
                <span className="conversation-bottomline">
                  <span>{conversation.preview}</span>
                  {conversation.unread ? <b>{conversation.unread}</b> : null}
                </span>
              </span>
            </button>
          ))}
        </div>
      </aside>

      <section className="chat-panel">
        <header className="chat-header">
          <div className="avatar avatar-coral">AL</div>
          <div className="chat-identity">
            <strong>Ava Laurent</strong>
            <span>online</span>
          </div>
          <div className="header-actions">
            <button aria-label="Start video call"><Icon name="video" /></button>
            <button aria-label="Start call"><Icon name="call" /></button>
            <button aria-label="More options"><Icon name="dots" /></button>
          </div>
        </header>

        <div className="message-wall">
          <div className="encryption-note">Messages are end-to-end encrypted</div>
          <div className="day-marker">TODAY</div>
          {messages.map((message) => (
            <div className={`message ${message.sent ? "sent" : "received"}`} key={message.body}>
              <span>{message.body}</span>
              <time>{message.time}{message.sent ? "  ✓✓" : ""}</time>
            </div>
          ))}
        </div>

        <footer className="composer">
          <button aria-label="Choose emoji"><Icon name="smile" /></button>
          <input aria-label="Message" placeholder="Type a message" />
          <button className="send-button" aria-label="Send message">➤</button>
        </footer>
      </section>
    </div>
  );
}
