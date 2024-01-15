

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white">
      <div className="h-full flex justify-center items-center p-4 relative z-50">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="uppercase text-5xl font-bold">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus reprehenderit quisquam, mollitia blanditiis vel
              voluptatum doloribus at saepe aut aspernatur, inventore
              adipisci labore odit aliquid natus necessitatibus nulla
              itaque assumenda?
            </p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero