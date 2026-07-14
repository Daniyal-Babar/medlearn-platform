import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Header the in-app viewer sends. Requiring it blocks casual direct downloads
// (e.g. opening /api/pdf in a new tab), which won't carry the header.
const VIEWER_HEADER = "x-medlearn-viewer";

export async function GET(request: NextRequest) {
  if (request.headers.get(VIEWER_HEADER) !== "1") {
    return new NextResponse("Not available", { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), "src/lectures/Netflix.pdf");
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        // inline (never "attachment") so browsers don't offer a save dialog
        "Content-Disposition": "inline",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("PDF not found", { status: 404 });
  }
}
