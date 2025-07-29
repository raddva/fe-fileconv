import { Navbar } from "@/components/common/app-navbar";
import Footer from "@/components/common/footer";
import { Tools } from "@/components/common/tools";

export default function Excel() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Tools
                title="Excel to PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/compress"
            />
            <Footer />
        </div>
    );
}
