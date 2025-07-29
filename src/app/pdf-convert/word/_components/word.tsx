import { Navbar } from "@/components/common/app-navbar";
import Footer from "@/components/common/footer";
import { Tools } from "@/components/common/tools";

export default function Word() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Tools
                title="DOCX to PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/compress"
            />
            <Footer />
        </div>
    );
}
