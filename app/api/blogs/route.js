import { NextResponse } from "next/server";
import * as fs from "fs";
import path, { parse } from 'path'; 

export async function GET() {
  try {
    const files = await fs.promises.readdir("app/blogdata");

    const fileData = [];
    for (const file of files) {
      const filePath = path.join("app/blogdata", file);
      const fileContents = await fs.promises.readFile(filePath, "utf8");
      const parsedData = JSON.parse(fileContents);
      fileData.push(parsedData);
    }

    return NextResponse.json(fileData);
  } catch (err) {
    console.error("Error reading files:", err);
    return NextResponse.json({ error: "Failed to read files" });
  }
}


// import { NextResponse } from "next/server";
// import * as fs from "fs";
// import path from 'path';

// export async function GET() {
//   try {
//     const files = await fs.promises.readdir("app/blogdata");
//     const fileNames = files.map(file => file); 

//     return NextResponse.json(fileNames);
//   } catch (err) {
//     console.error("Error reading file names:", err);
//     return NextResponse.json({ error: "Failed to read file names" });
//   }
// }
