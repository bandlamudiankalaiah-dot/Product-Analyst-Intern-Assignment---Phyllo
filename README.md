# Product Analyst Intern – Take-Home Assignment

**Candidate:** Ankalaiah Bandlamudi  
**Company:** Phyllo  
**Role:** Product Analyst Intern  

A clean, responsive single-page submission website presenting the analysis for the Phyllo Product Analyst Intern take-home assignment.

---

## Assignment Tasks

- **Task 1 – What doesn't match?**: Audit of 5 discrepancies between documented API contracts and actual captured responses, with the monetary format mismatch identified as the most serious issue.
- **Task 2 – What's the total revenue?**: Order-by-order calculation showing calculated revenue under the stated assumption: $225.70, excluding refunded order ord_1003.
- **Task 3 – Write two things**:
  - **A. A reply to Priya**: Professional communication addressing reconciliation variances.
  - **B. A bug report**: Factual engineering defect report for decimal monetary formatting.
- **Assumption / Limitations**: Note confirming that the provided data does not define how refunded orders should be treated for revenue, so this assumption should be confirmed with Finance.

---

## How to Install

Clone or download the project files and ensure Node.js is installed.

```bash
npm install
```

---

## How to Run Locally

### Option 1: Development Server (Vite)
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Option 2: Standalone HTML (Zero Dependencies)
You can directly open `standalone.html` in VS Code with the **Live Server** extension, or double-click `standalone.html` to open it in any web browser.

---

## How to Build

To compile and produce production-ready static assets:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## How to Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended)
1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and select your GitHub repository.
3. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

### Method 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

Follow the command line prompts to deploy directly.

---

*Phyllo Product Analyst Intern Assignment — Ankalaiah Bandlamudi*
