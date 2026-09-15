import Button from '@/components/Button';
import FilterUsers from '@/components/filterUsers';

const nextSubject = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  

  return (
    <div>
      <h2>Fetch the Users</h2>
      <Button/>
      <FilterUsers users={users} />
    </div>
  )
}

export default nextSubject
