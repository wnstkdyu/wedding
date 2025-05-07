import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ---------- 스타일 ---------- */
const Section = styled.section`
  max-width: 680px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--title-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  border: 1px solid #d7ccc8;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-color: #d97d83;
    box-shadow: 0 0 0 3px rgba(217, 125, 131, 0.2);
  }
`;

const Textarea = styled.textarea`
  min-height: 110px;
  resize: vertical;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  border: 1px solid #d7ccc8;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border-color: #d97d83;
    box-shadow: 0 0 0 3px rgba(217, 125, 131, 0.2);
  }
`;

const Button = styled.button`
  align-self: end;
  background: #d97d83;
  color: #fff;
  font-weight: 600;
  padding: 0.65rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Card = styled.li`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
`;

const Meta = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6d4c41;
`;

/* ---------- 컴포넌트 ---------- */
export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ nickname: "", content: "" });

  /* 메시지 가져오기 */
  useEffect(() => {
    fetch("/api/guestbook")
      .then(res => res.json())
      .then(setMessages)
      .catch(() => {});
  }, []);

  /* 메시지 남기기 */
  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ nickname: "", content: "" });
    const latest = await fetch("/api/guestbook").then(r => r.json());
    setMessages(latest);
  };

  return (
    <Section id="guestbook">
      <Heading data-aos="fade-up">방명록</Heading>

      <Form onSubmit={handleSubmit} data-aos="fade-up">
        <Input
          placeholder="이름"
          value={form.nickname}
          onChange={e => setForm({ ...form, nickname: e.target.value })}
          required
        />
        <Textarea
          placeholder="축하 메시지를 남겨주세요"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          required
        />
        <Button type="submit">남기기</Button>
      </Form>

      <List>
        {messages.map(m => (
          <Card key={m.id} data-aos="fade-up">
            <Meta>
              {m.nickname} ·{" "}
              {new Date(m.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Meta>
            <p style={{ whiteSpace: "pre-line", margin: 0 }}>{m.content}</p>
          </Card>
        ))}
      </List>
    </Section>
  );
}
