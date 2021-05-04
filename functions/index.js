const {WebHookClient} = require("@google-cloud/dialogflow-cx");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

    exports.controladorCasa = functions.runWith({timeoutSeconds: 300})
      .region("us-central1").https.onRequest((request, response) => {
        const tag = request.body.fulfillmentInfo.tag;
        let jsonResponse = {};

        if (tag == "teste") {
            console.log("primeiro123");
            jsonResponse ={
            fulfillmentResponse: {
                messages: [
                    {
                        text: {
                            text: ["Primeiro teste"],
                        },
                    },
                ],
            },
};
            axios
            .get("https://testandodialog.glitch.me/")
            .then((res) => {
              console.log(`statusCode: ${res.statusCode}`);
              console.log(res);
            });
        } else {
            jsonResponse = {
              // fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
              fulfillment_response: {
                messages: [
                  {
                    text: {
                      // fulfillment text response to be sent to the agent
                      text: [
                        `There are no fulfillment responses defined for "${tag}"" tag`,
                      ],
                    },
                  },
                ],
              },
            };
          }
          response.json(jsonResponse);
        });
