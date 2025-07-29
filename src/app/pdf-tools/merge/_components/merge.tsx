import { Tools } from "@/components/common/tools";

export default function Merge() {
    return (
        <div className="flex flex-col">
            <Tools
                title="Merge PDF"
                accept="application/pdf"
                multiple={true}
                endpoint="/merge"
            />
        </div>
    );
}
