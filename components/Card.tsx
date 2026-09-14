type Components = {
    title: String,
    description: String
}

const Card = ({title, description}: Components) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="text-gray-500 text-lg">{description}</p>
    </div>
  )
}

export default Card
