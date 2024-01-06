// import { NextResponse } from "next/server";
// import * as fs from "fs";
// import { URL } from "url";

// export async function GET(req) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const blogquery = searchParams.get("page");

//         // Use process.cwd() to get the current working directory
//         const data = await fs.promises.readFile(${process.cwd()}/app/blogdata/${blogquery}.json, "utf8");
//         const parsedData = JSON.parse(data);
//         return NextResponse.json(parsedData);
//     } catch (err) {
//         console.error("Error reading file:", err);

//         // Use status code 500 for internal server error
//         return NextResponse.json({ error: "No such blog found" }, { status: 500 });
//     }
// }
import { NextResponse } from "next/server";
import * as fs from "fs";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const blogquery = searchParams.get("page");

        const data = await fs.promises.readFile(`./app/blogdata/${blogquery}.json`, "utf8");
        const parsedData = JSON.parse(data);
        return NextResponse.json(parsedData);
    } catch (err) {
        console.error("Error reading file:", err);
        return NextResponse.json({ error: "No such blog found" },
            { status: 500 }
        );
    }
}
