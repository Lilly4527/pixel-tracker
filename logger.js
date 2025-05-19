fetch("https://api.telegram.org/bot<7717372931:AAE_IOW2aD4iqgSJTFHhcRetN3JVQNZpLg8>/sendMessage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: "<7130547584)>",
    text: `🔍 Новий візит на сайт\nIP: [не видно в CDN],\nЧас: ${new Date().toLocaleString()}\nUser-Agent: ${navigator.userAgent}`
  })
});
