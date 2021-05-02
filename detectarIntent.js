const {SessionsClient} = require('@google-cloud/dialogflow-cx');

const client = new SessionsClient();

async function detectIntentText() {
    const sessionId = Math.random().toString(36).substring(7);
    const sessionPath = client.projectLocationAgentSessionPath(
        projectId,
        location,
        agentId,
        sessionId
    );
    console.info(sessionPath);

    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: query,
          },
          languageCode,
        },
      };
      const [response] = await client.detectIntent(request);
      console.log(`User Query: ${query}`);
      for (const message of response.queryResult.responseMessages) {
        if (message.text) {
          console.log(`Agent Response: ${message.text.text}`);
        }
      }
      if (response.queryResult.match.intent) {
        console.log(
          `Matched Intent: ${response.queryResult.match.intent.displayName}`
        );
      }
      console.log(
        `Current Page: ${response.queryResult.currentPage.displayName}`
      );
}
    

detectIntentText();
