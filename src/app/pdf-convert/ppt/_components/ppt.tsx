import { Navbar } from "@/components/common/app-navbar";
import Footer from "@/components/common/footer";
import { Tools } from "@/components/common/tools";

export default function PPT() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Tools
                title="PPTX to PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/compress"
            />
            <Footer />
        </div>
    );
}
