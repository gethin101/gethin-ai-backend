export default async function handler(req, res) {
    const { prompt } = req.body;

    const response = await fetch("https://ai.hackclub.com/proxy/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.HC_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "qwen/qwen3-next-80b-a3b-instruct",
            temperature: 0.3,
            max_tokens: 200,
            messages: [
                { role: "user", content: prompt }
            ]
        })
    });

    const data = await response.json();
    res.status(200).json(data);
}
