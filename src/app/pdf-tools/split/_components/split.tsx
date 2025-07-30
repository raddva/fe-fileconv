"use client";

import { Tools } from "@/components/common/tools";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export default function Split() {
    const [ranges, setRanges] = useState([{ from: "", to: "" }]);

    const handleChange = (index: number, field: "from" | "to", value: string) => {
        const updated = [...ranges];
        updated[index][field] = value;
        setRanges(updated);
    };

    const addRange = () => setRanges([...ranges, { from: "", to: "" }]);
    const removeRange = (index: number) => {
        const updated = ranges.filter((_, i) => i !== index);
        setRanges(updated.length > 0 ? updated : [{ from: "", to: "" }]);
    };

    const serializedRanges = ranges
        .filter(r => r.from && r.to)
        .map(r => `${r.from}-${r.to}`)
        .join(",");

    const extraInput = (
        <div className="space-y-3">
            <Label className="text-sm">Page Ranges</Label>
            {ranges.map((range, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <Input
                        type="number"
                        min="1"
                        placeholder="From"
                        value={range.from}
                        onChange={(e) => handleChange(index, "from", e.target.value)}
                        className="w-20"
                    />
                    <span>to</span>
                    <Input
                        type="number"
                        min="1"
                        placeholder="To"
                        value={range.to}
                        onChange={(e) => handleChange(index, "to", e.target.value)}
                        className="w-20"
                    />
                    {ranges.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeRange(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            ))}
            <Button variant="outline" size="sm" type="button" onClick={addRange}>
                + Add Range
            </Button>

            <input type="hidden" id="ranges" value={serializedRanges} />
        </div>
    );

    return (
        <div className="flex flex-col">
            <Tools
                title="Split PDF"
                accept="application/pdf"
                multiple={false}
                endpoint="/split"
                extra={extraInput}
            />
        </div>
    );
}
