import { Tools } from "@/components/common/tools";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Img() {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <Tabs defaultValue="imgtopdf">
                <div className="flex justify-center">
                    <TabsList>
                        <TabsTrigger value="imgtopdf">Image to PDF</TabsTrigger>
                        <TabsTrigger value="pdftoimg">PDF to Image</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="imgtopdf">
                    <Tools
                        title="Image to PDF"
                        accept="image/*"
                        multiple={true}
                        endpoint="/images-to-pdf"
                    />
                </TabsContent>
                <TabsContent value="pdftoimg">
                    <Tools
                        title="PDF to Image"
                        accept="application/pdf"
                        multiple={false}
                        endpoint="/pdf-to-images"
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
}
