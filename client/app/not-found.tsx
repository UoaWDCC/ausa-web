import Page from "@/public/page-not-found-svgrepo-com.svg"
import Image from "next/image"
const NotFound = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center gap-4">
      <Image src={Page} alt="404 page not found" width={300} height={300} />
      <h3 className="h3 text-black">404</h3>
      <p className="h5 text-black m-4">{`The page you're looking for does not exist :(`}</p>
      <a href="/">
        <h4 className="h5 text-xl p-4 underline underline-offset-4 text-primary hover:text-primary/75 duration-300">
          home
        </h4>
      </a>
    </div>
  )
}

export default NotFound
