import { Tools } from "@/components/common/tools";

export default function Upscale() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tools
                title="Upscale Image"
                accept="image/*"
                multiple={false}
                endpoint="/upscale"
            />
        </div>
    );
}
