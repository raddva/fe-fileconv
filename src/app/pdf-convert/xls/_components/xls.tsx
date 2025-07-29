import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tools } from "@/components/common/tools"

export function Excel() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tabs defaultValue="topdf">
                <div className="flex justify-center">
                    <TabsList>
                        <TabsTrigger value="topdf">XLSX to PDF</TabsTrigger>
                        <TabsTrigger value="frompdf">PDF to XLSX</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="topdf">
                    <Tools
                        title="XLSX to PDF"
                        accept=".xls,.xlsx"
                        multiple={false}
                        endpoint="/xlsx-to-pdf"
                    />
                </TabsContent>
                <TabsContent value="frompdf">
                    <Tools
                        title="PDF to XLSX"
                        accept="application/pdf"
                        multiple={false}
                        endpoint="/pdf-to-xlsx"
                    />
                </TabsContent>
            </Tabs>

        </div>
    )
}
