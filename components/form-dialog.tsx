"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Eye, FileText } from "lucide-react"
import { useState } from "react"

export function FormDialog({ title, description, formContent, previewMode = false }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={previewMode ? "outline" : "default"} className={previewMode ? "justify-start" : ""}>
          {previewMode ? (
            <>{title}</>
          ) : (
            <>
              {previewMode ? "Preview" : "Download Form"}
              {previewMode && <Eye className="ml-2 h-4 w-4" />}
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="border rounded-md p-4 bg-white">
            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: formContent }} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download Form
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
