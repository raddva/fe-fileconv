import { Tools } from "@/components/common/tools";

export default function Compress() {
    return (
        <div className="flex flex-col">
            <Tools
                title="Compress PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/compress"
            />
        </div>
    );
}
