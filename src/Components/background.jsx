import Image from "next/image";
import image from "../../public/image.jpeg"



export default function Background() {
  return (
    <main >      
   
                        <Image
                          alt=""
                          src={image}
                          width={1000}
                          height={400}
                          className="h-full w-full py-9 object-cover object-center bg-indigo-950"
                        
                        />
            
    </main>
  );
}
