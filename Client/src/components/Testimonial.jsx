import { assets, testimonialsData } from "../assets/assets"

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center 
    justify-center my-20 py-12">

        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Customer Testimonials
        </h1>

        <p className="text-gray-500 mb-12">
            What our Users Are Saying
        </p>

        <div className="flex flex-wrap gap-6">
            {testimonialsData.map((tetstimonial,index)=>(
                <div key={index} 
                className="bg-white/20 p-12 rounded-lg shadow-md
                border border-gray-300 w-80 m-auto cursor-pointer hover:scale-[1.02]
                transition-all">
                    <div className="flex flex-col items-center">
                        <img src={tetstimonial.image}
                        className="rounded-full w-14"/>

                        <h2 className="text-xl font-semibold mt-3">
                            {tetstimonial.name}
                        </h2>

                        <p className="text-gray-500 mb-4">
                            {tetstimonial.role}
                        </p>

                        <div className="flex mb-4">
                            {Array(tetstimonial.stars).fill()
                            .map((item,index)=>(
                                <img key={index} src={assets.rating_star}/>
                            ))}
                        </div>

                        <p className="text-center text-gray-600 text-sm">
                            {tetstimonial.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonial