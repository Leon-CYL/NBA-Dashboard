# NBA Dashboard

## Dataset:

`Player.csv`: [link](https://www.kaggle.com/datasets/sumitrodatta/nba-aba-baa-stats?select=Player+Totals.csv)

## Spring Boot Dependencies:

- Spring Web
- Spring Data JPA
- Postgres SQL Driver
- Spring Boot Actuator
- Lombok
- Validation

## React.js + Tailwind CSS Frontend Setup

### 1. Create React Project with Vite

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### 2. Install Tailwind CSS

```bash
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind CSS

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```bash
npm run dec
```

> http://localhost:5173/
