type ProfilePageProps = {
    params: Promise<{name: string}>
} 

type Users = {
    id: number,
    name: string,
    email: string
}

const profilePage = async ({params}: ProfilePageProps) => {

    const users: Users[] = [
        {
            "id": 1,
            "name": "rohan",
            "email": "rohan@g.com"
        },
        {
            "id": 2,
            "name": "rohit",
            "email": "rohit@g.com"
        },
        {
            "id": 3,
            "name": "payal",
            "email": "payal@g.com"
        }
    ]

    const param = await params
    const username = param.name

    const profile = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

    if(!profile){
        return (
            <div>
                <h1 className="text-red-600">User not found</h1>
            </div>
        )
    }

  return (
    <div>
        <h1>id: {profile.id}</h1>
        <h2>Name: {profile.name}</h2>
        <p>Email: {profile.email}</p>
    </div>
  )
}

export default profilePage
