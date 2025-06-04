exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  let ip = "unknown";
  let url = "unknown";
  try {
    const body = JSON.parse(event.body);
    ip = body.ip || "unknown";
    url = body.url || "unknown";
  } catch (err) {
    return {
      statusCode: 400,
      body: "Invalid JSON",
    };
  }

  const formatter = new Intl.DateTimeFormat("pl", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const webhook = process.env.GOOGLE_SCRIPT_WEBHOOK;

  const createdAt = formatter.format(new Date());

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, url, createdAt }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Logged", ip, url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
