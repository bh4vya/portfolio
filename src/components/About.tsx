import React from "react";
import Image from "next/image";
import Bhavya from "public/images/bhavya.png"

const About = () => {
  return (
    <div className="text-white bg-custom-black flex flex-col  justify-between">
      <div className=" m-2 rounded-lg chat chat-end ">
        <p className="m-5 mb-20 text-[20px] font-poppins chat-bubble">
          Welcome to my world! I&apos;m Bhavya Shah, a forward-thinking
          Mechatronics student driven by curiosity and a love for innovation. As
          a natural leader &amp; team player, I thrive in collaborative
          environments, fostering creativity and problem-solving. My dedication
          to continuous learning &amp; adaptability keeps me at the forefront of
          emerging technologies. Join me as I embark on an exciting journey,
          where curiosity meets capability, and together, we&apos;ll shape the
          future. Below, you&apos;ll find a dynamic showcase of my core skills!
        </p>

        <div className="w-48 h-48 mt-16">
          <Image
            className="rounded-full relative object-cover"
            width={150}
            height={150}
            src={Bhavya}
            alt="bhavya"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
