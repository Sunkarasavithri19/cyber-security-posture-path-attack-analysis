# CloudShield Lab Landing Page

Landing page for the academic project:

**Cloud Security Posture and Attack-Path Analysis**

## Files

- `index.html` — landing page structure and content
- `style.css` — responsive SaaS/cybersecurity design
- `app.js` — navigation, reveal animations and Launch Lab URL configuration

## GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, and `app.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save and wait for GitHub Pages to deploy.

## Connect the real project

Open `app.js` and change:

```js
launchUrl: "#workflow"
```

to your deployed Streamlit/security-dashboard URL, for example:

```js
launchUrl: "https://your-project.streamlit.app"
```

The page currently uses the project documentation as its source for the project scope, workflow, tools, architecture, controlled weaknesses, attack-path example, remediation, guardrails, logging and ethical boundaries.

## Important

The numbers and labels shown on the page are project-structure metrics, not claims about completed scan results. Replace them with actual measurements after your implementation if needed.
