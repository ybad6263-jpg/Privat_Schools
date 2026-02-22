import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // Required by OpenRouter
        "X-Title": "Elite Academy School Site",  // Required by OpenRouter
      },
      body: JSON.stringify({
        "model": "stepfun/step-3.5-flash:free", // Using a high-quality FREE model
        "messages": [
          {
            "role": "system",
            "content": "You are the AI Assistant for Elite Academy. Be polite and helpful."
          },
          { "role": "user", "content": prompt }
        ],
      })
    });

    const data = await response.json();
    const aiText = data.choices[0].message.content;

    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    console.error("OpenRouter Error:", error);
    return NextResponse.json({ text: "I'm having trouble connecting right now." }, { status: 500 });
  }
}