"use client";

// Next Imports
import Image from "next/image";

// Images
import CasualImage from "@/assets/images/pages/home/dress-style/casual.png";
import FormalImage from "@/assets/images/pages/home/dress-style/formal.png";
import PartyImage from "@/assets/images/pages/home/dress-style/party.png";
import GymImage from "@/assets/images/pages/home/dress-style/gym.png";

const BrowseByDressStyleSection = () => {
    return (
        <div className="bg-[#F0F0F0] rounded-[40px] pt-[70px] pb-[76px] px-16 margin-main-x">
            <h2 className="text-center integralcf-font font-bold text-[48px] leading-[100%] mb-16">BROWSE BY dress STYLE</h2>

            <div className="flex items-center gap-5 flex-wrap">
                <div className="relative w-[407px] h-[289px]">
                    <Image
                        src={CasualImage}
                        alt="Casual Image"
                        fill
                        className="object-cover rounded-[20px]"
                    />

                    <div className="absolute left-9 top-[25px] text-[#000000] text-[36px] font-bold leading-[100%]">Casual</div>
                </div>
                <div className="relative w-[684px] h-[289px]">
                    <Image
                        src={FormalImage}
                        alt="Formal Image"
                        fill
                        className="object-cover rounded-[20px]"
                    />

                    <div className="absolute left-9 top-[25px] text-[#000000] text-[36px] font-bold leading-[100%]">Formal</div>
                </div>
                <div className="relative w-[684px] h-[289px]">
                    <Image
                        src={PartyImage}
                        alt="Party Image"
                        fill
                        className="object-cover rounded-[20px]"
                    />

                    <div className="absolute left-9 top-[25px] text-[#000000] text-[36px] font-bold leading-[100%]">Party</div>
                </div>
                <div className="relative w-[407px] h-[289px]">
                    <Image
                        src={GymImage}
                        alt="Gym Image"
                        fill
                        className="object-cover rounded-[20px]"
                    />

                    <div className="absolute left-9 top-[25px] text-[#000000] text-[36px] font-bold leading-[100%]">Gym</div>
                </div>
            </div>
        </div>
    )
}

export default BrowseByDressStyleSection;