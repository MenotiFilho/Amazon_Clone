import React from "react";
import Image from "next/image";

import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
	return (
		<header className="">
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						style={{ objectFit: "contain" }}
						className="cursor-pointer"
					/>
				</div>
				<div className="hidden sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
					<input
						type="text"
						className="bg-white rounded-l-md p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4 "
					/>
					<MagnifyingGlassIcon className="h-12 p-4" />
				</div>
				<div className="flex items-center text-white text-sm space-x-6 mx-6 whitespace-nowrap">
					<div className="link">
						<p>Hello, Menoti!</p>
						<p className="font-bold md:text-sm ">Account & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-bold md:text-sm ">& Orders</p>
					</div>
					<div className="link relative flex items-center">
						<span className=" absolute top-0 right-0 sm:right-10 h-4 w-4 text-xs bg-yellow-400 text-center rounded-full text-black font-extrabold ">
							3
						</span>
						<ShoppingCartIcon className="h-10" />
						<p className=" hidden sm:inline font-bold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>

			<div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
				<p className="link flex items-center">
					<Bars3Icon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Prime Video</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today's Deals</p>
				<p className="link hidden sm:inline-flex">Electronics</p>
				<p className="link hidden sm:inline-flex">Food & Grocery</p>
				<p className="link hidden sm:inline-flex">Prime</p>
				<p className="link hidden lg:inline-flex">Buy Again</p>
				<p className="link hidden lg:inline-flex">Shopper Toolkit</p>
				<p className="link hidden lg:inline-flex">Health & Personal Care</p>
			</div>
		</header>
	);
}

export default Header;
