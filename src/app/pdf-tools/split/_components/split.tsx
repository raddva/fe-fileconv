import { Navbar } from "@/components/common/app-navbar";
import { Tools } from "@/components/common/tools";

export default function Split() {
    return (
        <div className="flex flex-col">
            <Tools
                title="Split PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/split"
            />
        </div>
    );
}
