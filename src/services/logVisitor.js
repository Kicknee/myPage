export const logVisitor = async () => {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const { ip } = await ipRes.json();

    await fetch("/.netlify/functions/logVisitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip,
        url: window.location.href,
      }),
    });
  } catch (err) {
    console.error("Visitor log failed", err);
  }
};
