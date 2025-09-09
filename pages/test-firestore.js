import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

export default function TestFirestore() {
  const [requests, setRequests] = useState([]);

  // Add a new test request
  const addRequest = async () => {
    try {
      await addDoc(collection(db, "requests"), {
        userId: "test-user-" + Math.floor(Math.random() * 1000),
        service: "Taxi",
        status: "pending",
        createdAt: serverTimestamp(),
      });
      alert("‚úÖ Request added!");
    } catch (error) {
      console.error("Error adding request:", error);
      alert("‚ùå Failed to add request: " + error.message);
    }
  };

  // Load all requests
  const loadRequests = async () => {
    try {
      const snapshot = await getDocs(collection(db, "requests"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRequests(data);
    } catch (error) {
      console.error("Error loading requests:", error);
      alert("‚ùå Failed to load requests: " + error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Ì¥ó Firestore Test Page</h1>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded mr-2"
        onClick={addRequest}
      >
        ‚ûï Add Test Request
      </button>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={loadRequests}
      >
        Ì≥• Load Requests
      </button>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Requests:</h2>
        <ul className="mt-2 space-y-2">
          {requests.map((req) => (
            <li key={req.id} className="p-2 border rounded bg-gray-100">
              <strong>{req.service}</strong> ‚Äî {req.status} <br />
              <span className="text-xs text-gray-600">
                User: {req.userId} | Doc ID: {req.id}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
