"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Download, FileText, LinkIcon } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
export interface CaseDialogProps {
  title: string
  citation: string
  description: string
  outcome: string
  content: string
  parties?: string
  date?: string
  court?: string
}


export function CaseDialog({ title, citation, description, outcome, content, parties, date, court }: CaseDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className="w-full flex items-center justify-center" onClick={() => setOpen(true)}>
        Read Full Case
        <LinkIcon className="ml-2 h-4 w-4" />
      </Button>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            {title}
          </DialogTitle>
          <DialogDescription className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
            <span>{citation}</span>
            {date && <span className="text-slate-500">• {date}</span>}
            {court && <span className="text-slate-500">• {court}</span>}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {parties && (
            <div className="mb-4 p-3 bg-slate-100 rounded-md">
              <h3 className="font-medium mb-1">Parties</h3>
              <p>{parties}</p>
            </div>
          )}

          <div className="mb-4">
            <h3 className="font-medium mb-1">Summary</h3>
            <p className="text-slate-700">{description}</p>
          </div>

          <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-100">
            <h3 className="font-medium mb-1 text-blue-800">Outcome</h3>
            <p className="text-slate-700">{outcome}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Full Case Opinion</h3>
            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Key Legal Principles</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Property Rights", "Boundary Determination", "Survey Evidence", "Adverse Possession", "Easements"].map(
                (tag, i) => (
                  <Badge key={i} variant="outline" className="bg-slate-100">
                    {tag}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
