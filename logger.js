<head> 
<script src="https://pixel-tracker.vercel.app/logger.js"></script>
(async () => {
  const ipRes = await fetch("https://ipapi.co/json/");
  const ipData = await ipRes.json();

  const time = new Date().toLocaleTimeString();
  const message = `🛎️ Новий візит:
🌍 GEO: ${ipData.country_name} (${ipData.country})
🔗 URL: ${window.location.href}
🕒 Час: ${time}
📱 Device: ${navigator.userAgent}`;

  const token = '7717372931:AAE_IOW2aD4iqgSJTFHhcRetN3JVQNZpLg8';
  const chat_id = '7130547584';

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message })
  });
})();
