import { Navbar } from "@/components/common/app-navbar";
import Footer from "@/components/common/footer";
import { Tools } from "@/components/common/tools";

export default function Merge() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Tools
                title="Merge PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/merge"
            />
            <Footer />
        </div>
    );
}
