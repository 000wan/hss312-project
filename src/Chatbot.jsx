import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/system";

const ChatContainer = styled(Paper)({
  padding: "20px",
  maxHeight: "70vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "#f7f7f7",
});

const MessageBubble = styled("div")(({ isUser }) => ({
  padding: "10px 15px",
  borderRadius: "20px",
  maxWidth: "70%",
  alignSelf: isUser ? "flex-end" : "flex-start",
  backgroundColor: isUser ? "#007aff" : "#e5e5ea",
  color: isUser ? "#ffffff" : "#000000",
  wordBreak: "break-word",
}));

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "안녕하세요! 이스라엘-팔레스타인 분쟁에 대해 궁금한 점을 물어보세요.",
      isUser: false,
    },
  ]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, isUser: true };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "너는 이스라엘 어린이로서 이스라엘-팔레스타인 분쟁을 쉽게 설명해줘.",
            },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        isUser: false,
      };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching the data from OpenAI:", error);
      const errorMessage = {
        text: "오류가 발생했습니다. 다시 시도해주세요.",
        isUser: false,
      };
      setMessages([...messages, newMessage, errorMessage]);
    }

    setInput("");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <ChatContainer elevation={3}>
        <Typography variant="h5" gutterBottom>
          이스라엘-팔레스타인 분쟁에 대한 챗봇
        </Typography>
        <List
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              style={{
                display: "flex",
                justifyContent: msg.isUser ? "flex-end" : "flex-start",
              }}
            >
              <MessageBubble isUser={msg.isUser}>{msg.text}</MessageBubble>
            </ListItem>
          ))}
        </List>
      </ChatContainer>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="질문을 입력하세요..."
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessage}
          style={{ marginLeft: "10px" }}
        >
          보내기
        </Button>
      </div>
    </Container>
  );
}

export default Chatbot;
