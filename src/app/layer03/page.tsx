import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import Link from "next/link";


export default async function main() {
  const data = await db.query.posts.findMany({
    columns: {
      content: true,
      title: true,
    },
  })
 
      return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
      {data.map((data,index) => (
        <div key={index} className="card w-96 gap-x-2 bg-[#CCCCCC] border-black">
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.content}</p>
            <div className="justify-end card-actions">
            </div>
          </div>
        </div>
      ))}
    </div>
      );
    }
