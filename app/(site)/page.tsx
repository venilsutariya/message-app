import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
       <div className="
       flex
       flex-col
       justify-center
       min-h-full
       py-12
       sm:px-6
       lg:px-8
       bg-gray-900
      ">
        <div className="
         sm:mx-auto
         sm:w-full
         sm:max-w-md
        ">
            <Image 
             alt="logo"
             height={'48'}
             width={'48'}
             className="mx-auto w-auto"
             src={'/images/logo.png'}
            />
            <h2
             className="
              mt-6
              text-center
              text-3xl
              font-bold
              tracking-tight
            text-white
             "
            >
                Sign in to Your account
            </h2>
        </div>
        <AuthForm />
      </div>
    )
  }
  