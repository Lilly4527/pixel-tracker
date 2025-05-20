(async () => {
  const chat_id = '7130547584'; 
  const token = '7717372931:AAE_IOW2aD4iqgSJTFHhcRetN3JVQNZpLg8'; 

  const ipData = await fetch('https://ipapi.co/json/').then(res => res.json());

  const device = navigator.userAgent;
  const time = new Date().toLocaleTimeString();
  const url = window.location.href;

  const message = `
  🚨 Новий візит:
  🌍 GEO: ${ipData.country_name} (${ipData.country})
  🔗 URL: ${url}
  ⏰ Час: ${time}
  📱 Device: ${device}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text: message,
    })
  });
})();
