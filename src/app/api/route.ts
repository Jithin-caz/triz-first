import { NextResponse } from "next/server"
export async function GET()
{
return NextResponse.json({
    data:{"subjects":[
        {
            heading: "math",
            content: ["math 1","math 2","math 3","math 4","math 5"]
          },
          {
            heading: "phy",
            content: ["phy 1","phy 2","phy 3","phy 4","phy 5"]
          },
          {
            heading: "chem",
            content: ["chem 1","chem 2","chem 3","chem 4","chem 5"]
          },
          {
            heading: "bio",
            content: ["chem 1","chem 2","chem 3","chem 4","chem 5"]
          },
          {
            heading: "eng",
            content: ["eng 1","eng 2","eng 3","eng 4","eng 5"]
          },
          {
            heading: "geo",
            content: ["geo 1","geo 2","geo 3","geo 4","geo 5"]
          },
    ]},
})
}