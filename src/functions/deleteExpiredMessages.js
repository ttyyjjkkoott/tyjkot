const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firestore = admin.firestore();

exports.deleteExpiredMessages = functions.pubsub
    .schedule("every 1 hours")
    .onRun(async (context) => {
      const now = new Date();
      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      const messagesRef = firestore.collection("messages");

      // Get all messages that were created before yesterday
      const querySnapshot = await messagesRef
          .where("createdAt", "<", yesterday)
          .get();
      const batch = firestore.batch();

      // Delete all messages in the query results
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });

      // Commit the batch of deletes
      await batch.commit();

      console.log(`Deleted ${querySnapshot.size} expired messages.`);
    });
