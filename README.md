# ⚙️ FILECONV - Image & File Tools (NextJS + ShadCN UI)

This is the frontend of a full-stack file converter application built using **Next.js 14**, **TypeScript**, **TailwindCSS**, and **ShadCN UI**. It provides a sleek, modern, and responsive interface that connects to the **Flask** backend via API routes to handle file conversions, PDF tools, image processing, and utility features — all in one place.

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Dropzone](https://react-dropzone.js.org/)

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

```bash
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
```

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
- Image Tools:
  - Convert to JPG
  - Background Remove
  - Image to Text
  - Upscale Image
  - Compress Image
  - Crop & Resize Image
  - QR Code Generator (new!)

## 🌐 Live Demo

This project has been deployed via [Vercel](https://fileconv.vercel.app/)

## 🙋‍♀️ Author

Made with ❤️ by Asdya.
