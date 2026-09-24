const fs = require("fs");
const https = require("https");

const DEVTO_API_KEY = process.env.DEVTO_API_KEY;
const DEVTO_USERNAME = process.env.DEVTO_USERNAME || "kielltampubolon";
const README_FILE = "README.md";
const START_MARKER = "<!-- DEVTO-FOLLOWERS-COUNT:START -->";
const END_MARKER = "<!-- DEVTO-FOLLOWERS-COUNT:END -->";
const USER_AGENT = `${DEVTO_USERNAME}-github-profile`;

if (!DEVTO_API_KEY) {
  throw new Error("Missing required DEVTO_API_KEY environment variable.");
}

const previewResponse = (data) => {
  const trimmed = data.trim();
  return trimmed ? trimmed.slice(0, 500) : "<empty>";
};

const fetchJson = (path) => {
  const options = {
    hostname: "dev.to",
    port: 443,
    path,
    method: "GET",
    headers: {
      "api-key": DEVTO_API_KEY,
      Accept: "application/vnd.forem.api-v1+json",
      "User-Agent": USER_AGENT,
    },
    timeout: 15000,
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode !== 200) {
          reject(
            new Error(
              `DEV.to API request failed (${res.statusCode} ${res.statusMessage || "Unknown"}). Response preview: ${previewResponse(data)}`
            )
          );
          return;
        }

        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Failed to parse API response. Response preview: ${previewResponse(data)}`));
        }
      });
    });

    req.on("timeout", () => req.destroy(new Error("DEV.to API request timed out.")));
    req.on("error", reject);
    req.end();
  });
};

const getFollowersCount = async () => {
  const perPage = 1000;
  let page = 1;
  let totalCount = 0;

  while (true) {
    const followers = await fetchJson(`/api/followers/users?page=${page}&per_page=${perPage}`);

    if (!Array.isArray(followers)) {
      throw new Error("DEV.to followers endpoint returned an invalid response.");
    }

    totalCount += followers.length;

    if (followers.length < perPage) {
      return totalCount;
    }

    page += 1;
  }
};

const updateReadme = async () => {
  const count = await getFollowersCount();
  const readmeContent = fs.readFileSync(README_FILE, "utf8");

  if (!readmeContent.includes(START_MARKER) || !readmeContent.includes(END_MARKER)) {
    throw new Error(`README.md must contain ${START_MARKER} and ${END_MARKER}.`);
  }

  const newContent = `${START_MARKER}**${count.toLocaleString("en-US")}** DEV.to followers${END_MARKER}`;
  const regex = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, "g");

  fs.writeFileSync(README_FILE, readmeContent.replace(regex, newContent));
  console.log(`README updated with DEV.to follower count: ${count}`);
};

updateReadme().catch((error) => {
  console.error(error);
  process.exit(1);
});
