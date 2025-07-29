import { Tools } from "@/components/common/tools";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function PPT() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tabs defaultValue="topdf">
                <div className="flex justify-center">
                    <TabsList>
                        <TabsTrigger value="topdf">PPTX to PDF</TabsTrigger>
                        <TabsTrigger value="frompdf">PDF to PPTX</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="topdf">
                    <Tools
                        title="PPTX to PDF"
                        accept=".ppt,.pptx"
                        multiple={false}
                        endpoint="/pptx-to-pdf"
                    />
                </TabsContent>
                <TabsContent value="frompdf">
                    <Tools
                        title="PDF to PPTX"
                        accept="application/pdf"
                        multiple={false}
                        endpoint="/pdf-to-pptx"
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
}
