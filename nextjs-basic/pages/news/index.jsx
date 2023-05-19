import Link from "next/link";

const NewsPage = () => {
	return (
		<>
			<h1>News page</h1>
			<ul>
				<li>
					<Link href="news/nextjs-is-a-great-framework">NextJS Is A Great Framework</Link>
				</li>
				<li>
					<Link href="news/react-article">React article</Link>
				</li>
				<li>
					<Link href="news/something-else">Something else</Link>
				</li>
			</ul>
		</>
	);
};

export default NewsPage;
