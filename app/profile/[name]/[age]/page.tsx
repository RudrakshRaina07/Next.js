type AgePageProps = {
    params: Promise<{name: string, age: string}>
}

const age = async({params}: AgePageProps) => {
    const users = [
        {
          "id": 1,
          "name": "rohan",
          "age": 20,
          "email": "rohan@g.com"
        },
        {
            "id": 2,
            "name": "rohit",
            "age": 25,
            "email": "rohit@g.com"
        },
        {
            "id": 3,
            "name": "payal",
            "age": 30,
            "email": "payal@g.com"
        }
    ]

    const param = await params
    const username = param.name
    const userAge = param.age

    const userProfile = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && user.age.toString() === userAge)

    if(!userProfile){
        return (
            <div>
                <h1 className="text-red-600">User not found</h1>
            </div>
        )
    }

  return (
    <div>
        <h1>Id: {userProfile.id}</h1>
        <h2>Name: {userProfile.name}</h2>
        <h3>Age: {userProfile.age}</h3>
        <h4>Email: {userProfile.email}</h4>
    </div>
  )
}

export default age
