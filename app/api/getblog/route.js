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
        return NextResponse.json({ error: "No such blog found",err },
            { status: 500 }
        );
    }
}

