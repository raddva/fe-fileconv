import { Navbar } from "@/components/common/app-navbar";
import Footer from "@/components/common/footer";
import { Tools } from "@/components/common/tools";

export default function Compress() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Tools
                title="Compress PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/compress"
            />
            <Footer />
        </div>
    );
}
