import { Tools } from "@/components/common/tools";

export default function Text() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tools
                title="🖼️ Image to Text (OCR)"
                accept="image/*"
                multiple={false}
                endpoint="/image-to-text"
            />
        </div>
    );
}
