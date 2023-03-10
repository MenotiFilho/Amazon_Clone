import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
	const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);

	const [hasPrime] = useState(Math.random() < 0.5);

	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10">
			<p className=" absolute top-2 right-2 text-xs italic text-gray-400">
				{category}
			</p>
			<div className="">
				<Image
					src={image}
					width={300}
					height={300}
					style={{ objectFit: "contain" }}
				/>
			</div>

			<h4 className="my-3">{title}</h4>

			<div className="flex text-yellow-500">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<div key={""}>
							<StarIcon className="h-5" />
						</div>
					))}
			</div>

			<p className="text-xs my-2 line-clamp-2">{description}</p>

			<div className="mb-5">
				<CurrencyFormat value={price} displayType="text" prefix="$" />
			</div>
			{hasPrime && (
				<div className=" flex items-center space-x-2 -mt-5">
					<img className="w-12" src="https://links.papareact.com/fdw" alt="" />
					<p className="text-xs text-gray-500">FREE Next-day Delivery </p>
				</div>
			)}

			<button className="mt-auto button">Add to Basket</button>
		</div>
	);
}

export default Product;
