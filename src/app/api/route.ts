import { NextResponse } from "next/server"
export async function GET()
{
return NextResponse.json({
    data:{"subjects":[
        {
            heading: "MATH (NCERT)",
            content: ["math 1","math 2","math 3","math 4","math 5"]
          },
          {
            heading: "MATH (FOUNDATIONS)",
            content: ["phy 1","phy 2","phy 3","phy 4","phy 5"]
          },
          {
            heading: "MATH (MAHARASHTRA)",
            content: ["chem 1","chem 2","chem 3","chem 4","chem 5"]
          },
          {
            heading: "PACE (SOE PUNJAB)",
            content: ["chem 1","chem 2","chem 3","chem 4","chem 5"]
          },
          {
            heading: "SCIENCE (NCERT)",
            content: ["eng 1","eng 2","eng 3","eng 4","eng 5"]
          },
          {
            heading: "ALL STATE BOARDS",
            content: ["geo 1","geo 2","geo 3","geo 4","geo 5"]
          },
    ]},
})
}