# 📊 Student Scoreboard Application

A fast, highly responsive Student Scoreboard application built using **React** and **Vite**. This application features modular code architecture, instant UI synchronization, and clean condition-based evaluation formatting.

---

## 🚀 Live Link


---

## ✨ Application Features

*   **Pre-filled Dataset**: Displays initial dummy data natively on mount.
*   **Dynamic Data Insertion**: Quickly add new student profiles with live validation checks (Scores restricted between `0` and `100`).
*   **Segmented Layout Grid**: Modular grid table isolating list logic.
*   **Instant Updates**: Modifying a specific score row automatically updates application state metrics on the fly.
*   **Automated Status Evaluation**:
    *   🟢 **PASS** (Score ≥ 40)
    *   🔴 **FAIL** (Score < 40)
*   **Dynamic Metadata Tracking**: Real-time evaluation updates for Total Accounts, Total Passes, and Combined Average Scores.

---

## 🛠️ Tech Stack & Architecture

*   **Framework:** React 18+
*   **Build Engine:** Vite
*   **Styling:** Modular inline layout sheets 
*   **Compilers:** OXC AST Engine

---

## 📂 Project Component Architecture

The source code directory structure separates distinct functional items into atomic sub-components:

```text
src/
├── components/
│   ├── RegisterStudentForm.jsx  # Handles input submissions for new entries
│   ├── ScoreboardMetrics.jsx    # Calculations wrapper (Total, Passed, Avg)
│   ├── StudentRecordRow.jsx     # Row state isolator for instant updates
│   └── StudentRecordTable.jsx   # List mapper and core table skeleton
├── App.css                      # Global global stylings
├── App.jsx                      # Orchestrator core parent controller
├── index.css                    # Structural baseline resets
└── main.jsx                     # Strict mode DOM mounting point
```

---

## 📦 Local Deployment Instructions

Follow these instructions to clone, configure, and boot the application locally on your system.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed on your local computer.

### 2. Dependency Resolution
Execute the packet installation sequence within your terminal root:
```bash
npm install
```

### 3. Running Environment
Launch your hot-reloading native development node server:
```bash
npm run dev
```

### 4. Code Base Optimization
Generate fully optimized, zero-latency asset compilation pipelines:
```bash
npm run build
```
