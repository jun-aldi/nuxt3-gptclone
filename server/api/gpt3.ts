export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  let prompt = 'The following is a conversation with an AI assistant trained by a youtube channel';

  let messages = [
    {
      actor: "Human",
      message: "Hello, how are you?"
    },
    {
      actor: "AI",
      message: "I am an AI created by Juniar Aldi"
    },
  ];

  const prevMessages = await readBody(event);
  messages = messages.concat(prevMessages);


  //append message to pprompt, taking massage.actor as " actor"  followed by message.message
  prompt +=
    messages
      .map((message) => '${message.actor}: ${messages.message}')
      .join("\n") + "\nAI:";
  
  const req = await fetch("https:://api.openai,com/v1/completions", {
    method: "POST",
    headers: {
      
      "Content-Type": "application/json",
      Authorization: 'Bearer $ '
    }
  });

});
