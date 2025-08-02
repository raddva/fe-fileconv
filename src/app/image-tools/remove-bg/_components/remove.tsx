import { Tools } from "@/components/common/tools";

export default function Remove() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tools
                title="Remove Image Background"
                accept="image/*"
                multiple={false}
                endpoint="/remove-bg"
            />
        </div>
    );
}
