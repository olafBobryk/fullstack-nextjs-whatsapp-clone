"use client";

function Icon({ children }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24">{children}</svg>;
}

function Avatar({ children, tone }) {
  return <div className={`avatar avatar-${tone}`}>{children}</div>;
}

export default function WhatsAppChat() {
  return (
    <div className="whatsapp-stage">
      <aside className="conversation-panel">
        <header className="panel-header">
          <Avatar tone="green">OB</Avatar>
          <div className="header-actions">
            <button aria-label="Start a new chat"><Icon><path d="M4 4h16v12H8l-4 4V4Z" /></Icon></button>
            <button aria-label="More options"><Icon><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></Icon></button>
          </div>
        </header>

        <div className="search-row">
          <label className="search-box">
            <Icon><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></Icon>
            <input aria-label="Search conversations" placeholder="Search or start a new chat" />
          </label>
        </div>

        <div className="conversation-list">
          <button className="conversation active">
            <Avatar tone="coral">AL</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Ava Laurent</strong><time>10:42</time></span><span className="conversation-bottomline"><span>The launch notes look great. Sending the final…</span><b>2</b></span></span>
          </button>
          <button className="conversation">
            <Avatar tone="blue">PT</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Product team</strong><time>09:18</time></span><span className="conversation-bottomline"><span>Noah: I moved our review to 2 PM</span></span></span>
          </button>
          <button className="conversation">
            <Avatar tone="violet">MB</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Maya Brooks</strong><time>Yesterday</time></span><span className="conversation-bottomline"><span>Photo</span></span></span>
          </button>
          <button className="conversation">
            <Avatar tone="amber">DR</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Design review</strong><time>Yesterday</time></span><span className="conversation-bottomline"><span>You: The new spacing feels much calmer</span></span></span>
          </button>
          <button className="conversation">
            <Avatar tone="green">EL</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Elias Lane</strong><time>Tuesday</time></span><span className="conversation-bottomline"><span>Perfect, see you there!</span></span></span>
          </button>
          <button className="conversation">
            <Avatar tone="rose">WK</Avatar>
            <span className="conversation-copy"><span className="conversation-topline"><strong>Weekend plans</strong><time>Monday</time></span><span className="conversation-bottomline"><span>Sofia: I found a place by the water</span></span></span>
          </button>
        </div>
      </aside>

      <section className="chat-panel">
        <header className="chat-header">
          <Avatar tone="coral">AL</Avatar>
          <div className="chat-identity"><strong>Ava Laurent</strong><span>online</span></div>
          <div className="header-actions">
            <button aria-label="Start video call"><Icon><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></Icon></button>
            <button aria-label="Start call"><Icon><path d="M6.6 2.9c.4-.4 1-.4 1.4-.1l2.1 1.6c.4.3.5.9.3 1.3L9.2 8c-.2.4-.1.8.2 1.1l3.5 3.5c.3.3.8.4 1.1.2l2.3-1.2c.5-.2 1-.1 1.3.3l1.6 2.1c.3.4.3 1-.1 1.4l-1.6 1.6c-.8.8-2 1.1-3 .7-2.7-1-5.1-2.6-7.2-4.7S3.6 8.5 2.6 5.8c-.4-1-.1-2.2.7-3L4.9 1.2" /></Icon></button>
            <button aria-label="More options"><Icon><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></Icon></button>
          </div>
        </header>

        <div className="message-wall">
          <div className="encryption-note">Messages are end-to-end encrypted</div>
          <div className="day-marker">TODAY</div>
          <div className="message received"><span>Morning! Are we still good for the launch review?</span><time>10:31</time></div>
          <div className="message sent"><span>Absolutely. I finished the final pass last night.</span><time>10:34&nbsp; ✓✓</time></div>
          <div className="message received"><span>Nice. The new conversation layout feels much clearer.</span><time>10:37</time></div>
          <div className="message sent"><span>Agreed — it keeps the important actions within reach.</span><time>10:39&nbsp; ✓✓</time></div>
          <div className="message received"><span>The launch notes look great. Sending the final version now.</span><time>10:42</time></div>
        </div>

        <footer className="composer">
          <button aria-label="Choose emoji"><Icon><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c1.8 2 5.2 2 7 0M9 9h.01M15 9h.01" /></Icon></button>
          <input aria-label="Message" placeholder="Type a message" />
          <button className="send-button" aria-label="Send message">➤</button>
        </footer>
      </section>
    </div>
  );
}
