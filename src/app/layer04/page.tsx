import Link from "next/link";
const mockUrls = ["https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbWVxKHu8dNsLBaAgPFQJmeX5SzfOc02ZTVqiD","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbxMNtQTpVLQG3WprkuJhVECyTHFDNqAmz4nXj","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbcG7IGthmKEz2TLP1DlgZhqsVQaxutU9c76N3","https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbGocuCaS0Ef7PVqKbYjWgvJScraHmk8wMZnzA"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
	return (
		<main>
      
      <div className="flex flex-wrap justify-center mask mask-heart"><figure className="hover-gallery max-w-160 flex flex-wrap">
  <img src="https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbWVxKHu8dNsLBaAgPFQJmeX5SzfOc02ZTVqiD" />
  <img src="https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbxMNtQTpVLQG3WprkuJhVECyTHFDNqAmz4nXj" />
  <img src="https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbcG7IGthmKEz2TLP1DlgZhqsVQaxutU9c76N3" />
  <img src="https://8fkcpvra9j.ufs.sh/f/uFS3O6klxSLbGocuCaS0Ef7PVqKbYjWgvJScraHmk8wMZnzA"/>
</figure></div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 contrast-200">{
      mockImages.map((image) => (
        <div key ={image.id} className="">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}

