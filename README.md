# Job Finder Application

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- **Authentication:** Users can create new accounts and Loginto existing accounts.
- **Job Listing:** Users can view and filter job listings.
- **Application Process:** Users can apply for job listings or withdraw their applications.
- **Responsive Design:** The application displays properly on mobile devices.
- **API Usage:** Utilizes the provided API for data fetching.

## Technologies Used

- **Frontend:**

  - React (with Vite)
  - Javascript
  - Tailwind CSS
  - Tanstack Query (first time by the way)
  - React Hook Form
  - Zustand (preferred for state management)
  - Shadcn/ui
  - Yup for form validation

- **Backend:**
  - API: [Novel Project API](https://novel-project-ntj8t.ampt.app/swagger/)

## Installation

To run the Job Finder Application locally, follow these steps:

```sh
git clone https://github.com/barisyasar/job-finder.git
```

```sh
cd job-finder
```

```sh
yarn install
```

```sh
VITE_API_BASE_URL=https://novel-project-ntj8t.ampt.app/api
```

```sh
yarn dev
```

## Project Structure

```sh
job-finder/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── ui/
│ ├── config/
│ ├── hooks/
│ ├── pages/
│ ├── services/
│ ├── state/
│ ├── styles/
│ │ │ ├── index.css
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.json
├── .tailwind.config.js
├── package.json
├── README.md
└── vite.config.js
```
