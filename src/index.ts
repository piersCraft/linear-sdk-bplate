import { LinearClient } from '@linear/sdk';

async function fetchLinearData() {
  // Replace with your Linear API key
  const client = new LinearClient({
    apiKey: process.env.LINEAR_API_KEY
  });

  try {
    // Example: Fetch issues
    const issues = await client.issues();

    issues.nodes.forEach(issue => {
      console.log(`Issue: ${issue.title}, Status: ${issue.id}`);
    });
  } catch (error) {
    console.error('Error fetching Linear data:', error);
  }
}

fetchLinearData();

