import React, { useEffect, useState } from 'react';
import { Version2Client } from 'jira.js';

const useJiraClient = () => {
  const [jiraClient, setJiraClient] = useState(null);
  useEffect(() => {
    chrome.storage.local.get(['jira-settings'], async (result) => {
      if (result['jira-settings']) {
        const { host, username, password } = JSON.parse(result['jira-settings']);

        const client = new Version2Client({
          host,
          authentication: {
            basic: {
              email: username,
              apiToken: password,
            },
          },
        });

        setJiraClient(client);
      }
    });
  }, []);

  return {
    jiraClient
  };
};

export default useJiraClient;

