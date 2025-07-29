import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tools } from "@/components/common/tools"

export function Word() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tabs defaultValue="topdf">
                <div className="flex justify-center">
                    <TabsList>
                        <TabsTrigger value="topdf">DOCX to PDF</TabsTrigger>
                        <TabsTrigger value="frompdf">PDF to DOCX</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="topdf">
                    <Tools
                        title="DOCX to PDF"
                        accept=".doc,.docx"
                        multiple={false}
                        endpoint="/docx-to-pdf"
                    />
                </TabsContent>
                <TabsContent value="frompdf">
                    <Tools
                        title="PDF to DOCX"
                        accept="application/pdf"
                        multiple={false}
                        endpoint="/pdf-to-docx"
                    />
                </TabsContent>
            </Tabs>

        </div>
    )
}
