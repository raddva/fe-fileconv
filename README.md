# ⚙️ File Converter Frontend

This is the frontend of a full-stack file converter application built using **Next.js 14**, **TypeScript**, **TailwindCSS**, and **ShadCN UI**. It connects to the Flask backend via API routes to convert, merge, split, and compress PDF files, as well as convert between DOCX, XLSX, PPTX, and image formats.

---

## 🌐 Live Demo

> Coming soon – deployed via Vercel.

---

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Dropzone](https://react-dropzone.js.org/)
- [Axios](https://axios-http.com/)
- [Framer Motion](https://www.framer.com/motion/) (optional animations)

---

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open your browser**
   Visit http://localhost:3000

## 📁 Project Structure

frontend/
├── app/ # App directory (Next.js 14)
│ ├── layout.tsx # Layout with Navbar/Footer
│ └── page.tsx # Home page
├── components/ # Reusable UI components
│ ├── common/ # Navbar, Footer, DarkMode
│ └── tools/ # File tool UIs (e.g. Merge, Split, Convert)
├── lib/ # Utility functions (e.g. API, validation)
├── public/ # Static files
├── styles/ # Global styles (if any)
├── actions/ # Frontend logic for conversion API
├── tailwind.config.ts
├── tsconfig.json
└── README.md

## 🛠 Features (Frontend UI)

- 📄 Upload and preview files before conversion
- ⚡ Drag and drop interface
- 🧠 Smart tool detection
- 🎨 Light/Dark mode with toggle
- 📦 File conversion tools:
  - PDF ↔️ DOCX
  - PDF ↔️ XLSX
  - PDF ↔️ PPTX
  - PDF ↔️ Images
  - Merge/Split/Compress PDFs

## 📝 License

MIT License
