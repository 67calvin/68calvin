"use client";
import { useState, useEffect } from "react";
import uploadData from "./api/upload-stuff/upload";
import { useRouter } from "next/navigation";


export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();


  useEffect(() => {
    // This hook will run after the component is mounted on the client side
    // Any code that interacts with the browser (e.g., navigation, DOM manipulation) should go here
  }, []); // Empty dependency array ensures it runs only once, after initial render


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await uploadData(title, content);
    console.log(result); // Handle the result as needed
    router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
  };


  return (
  <main>
    
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center ">
      <div className = "flex-col flex w-100">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button className = "btn btn-primary" type="submit">Upload</button>
      <div className="flex flex-col justify-center"><img src="https://tse1.mm.bing.net/th/id/OIP.wHS0bCRzPps-1VH3uEbrpgHaFM?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=206&h=143&c=7&o=7&rm=3"></img></div>
      </div>
    </form>
</main>

  );
}

