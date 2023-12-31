import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { bgColors } from "@/utils/bgColors";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  selectedColor: string;
};

export default function Home() {
  const [bgColor, setBgColor] = useState<string | undefined>("#ffffff");
  const [textOpacity, setTextOpacity] = useState<number | undefined>(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    setBgColor(bgColors[randomIndex]);
    setTextOpacity(1);
  }, []);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex h-screen w-screen flex-col items-center justify-center transition duration-500"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <p
          className="transition duration-500"
          style={{
            opacity: textOpacity,
          }}
        >
          somos resultados de gerações de descaso<br></br>
          construções manipuladas em embaraços<br></br>
          pra seguir como se soubéssemos nossos prazos <br></br>
          fim de mundo e seus tesouros<br></br>
          coração em mil destroços<br></br>
          nosso tempo vale ouro<br></br>
          um chão pra chorar e conexão com redes de computação<br></br>
          enquanto os nossos deixam de ser nossos<br></br>e em qualquer apuro
          questionamos:<br></br>
          que futuro é esse que plantamos?<br></br>
          sem sentirmos amor porque não nos sentimos seguros<br></br>
          replicamos essa dor e o ciclo é cada vez mais injusto<br></br>
          infinitos são os versos pra não destruir tudo <br></br>
        </p>
        <div className="absolute bottom-8 mt-8 flex gap-2">
          <BsChevronLeft size={32} />
          <BsChevronRight size={32} />
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const randomIndex = Math.floor(Math.random() * bgColors.length);
//   const selectedColor = bgColors[randomIndex];
//   return {
//     props: { selectedColor },
//   };
// }
