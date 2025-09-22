import Link from "next/link";
const mockUrls = ["https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbWVxKHu8dNsLBaAgPFQJmeX5SzfOc02ZTVqiD","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbxMNtQTpVLQG3WprkuJhVECyTHFDNqAmz4nXj","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbcG7IGthmKEz2TLP1DlgZhqsVQaxutU9c76N3","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbGocuCaS0Ef7PVqKbYjWgvJScraHmk8wMZnzA"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
	return (
		<main>
			<div className="flex flex-wrap gap-4 saturate-8000 hue-rotate-800 cursor-help -skew-5 rotate-67 blur-sm shadow-xl/30">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-900">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
    <div className="flex flex-wrap">
      <button className="cursor-pointer ring-4 ">Sybau</button>
    </div>

		</main>
	);
}

