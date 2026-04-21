module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { name, phone, type, details } = body;
  if (!name || !phone || !type || !details) {
    return res.status(400).json({
      success: false,
      message: "Please fill out all required fields.",
    });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New Website Enquiry from " + name,
        from_name: name,
        name,
        phone,
        "Type of Shoot": type,
        details,
      }),
    });

    const responseText = await response.text();
    let data = {};
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Web3Forms response is not JSON:", responseText);
    }

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data.message || "Web3Forms API Error: " + response.status,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Vercel Serverless Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong locally.",
    });
  }
};
