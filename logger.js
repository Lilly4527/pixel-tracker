(async () => {
  const token = '7717372931:AAE_IOW2aD4iqgSJTFHhcRetN3JVQNZpLg8';
  const chat_id = '7130547584';

  const ipData = await fetch('https://ipapi.co/json/').then(r => r.json());
  const device = navigator.userAgent;
  const time = new Date().toLocaleTimeString();

  const message = `⚠️ Новий візит:\n🌐 GEO: ${ipData.country_name} (${ipData.country})\n🔗 URL: ${window.location.pathname}\n🕒 Час: ${time}\n📱 Device: ${device}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id, text: message })
  });
})();
