import { Tools } from "@/components/common/tools";

export default function Compress() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tools
                title="Compress Image"
                accept="image/*"
                multiple={false}
                endpoint="/image-compress"
            />
        </div>
    );
}
