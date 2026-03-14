import { NextResponse } from "next/server";
import { schoolKnowledge } from "@/constants/schoolData";

export async function POST(request: Request) {
  try {
    // 1. Parse request and check for prompt
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json({ text: "Say something!" }, { status: 400 });
    }

    // 2. Call OpenRouter with optimized settings
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", 
        "X-Title": "Ayaung Software - HteikTan", 
      },
      body: JSON.stringify({
        "model": "stepfun/step-3.5-flash:free",
       // Inside your body: JSON.stringify({...})
"messages": [
  {
    "role": "system",
    "content": `You are the Hteik Tan School Assistant. 
Use this info: ${schoolKnowledge}.

STRICT OUTPUT RULES:
1. Use Bold titles for categories.
2. Use Bullet Points for lists.
3. Use Double Line Breaks (\n\n) between sections.
4. If you don't know the answer, respond with: "I'm sorry, I don't have that info. Please [Contact Us](#contact)."
5. KEEP IT SHORT.`
  },
  { "role": "user", "content": prompt }
],  
        "temperature": 0.5, // Lower temperature = more accurate and less "chatty"
        "max_tokens": 800    // Enough space for a detailed fee breakdown
      })
    });

    // 3. Robust Error Handling for the Demo
    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error Response:", errorText);
      return NextResponse.json({ text: "The AI is resting. Try again in a second!" }, { status: response.status });
    }

    const data = await response.json();
    
    // 4. Safe data extraction
    const aiText = data.choices?.[0]?.message?.content || "I'm not sure how to answer that yet.";

    return NextResponse.json({ text: aiText });

  } catch (error: any) {
    console.error("Route Error:", error);
    return NextResponse.json({ text: "Connection error. Please check your internet." }, { status: 500 });
  }
}