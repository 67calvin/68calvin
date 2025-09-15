import Link from "next/link";
const mockUrls = ["https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbWVxKHu8dNsLBaAgPFQJmeX5SzfOc02ZTVqiD","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbxMNtQTpVLQG3WprkuJhVECyTHFDNqAmz4nXj","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbcG7IGthmKEz2TLP1DlgZhqsVQaxutU9c76N3"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
	return (
		<main>
			<div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}
