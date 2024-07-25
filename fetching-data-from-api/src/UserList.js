import react,{useState, useEffect} from 'react';

const UserList = () => {

    // state to hold the list of users

    const[users, setUsers] = useState([]);

    // state to manage loading and erre states

    const[loading,setLoading] = useState(true);
    const[error,setError]= useState(null);

    //fetch the data when the component counts

    useEffect(() => {

        //define an asynchronous function to fetch the data

        const fetchUsers = async () => {
            try{

                // make an ai request to fetch the data
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response.ok){
                    throw new Error('Network response was not ok');
                }

                //parse the response as JSON
                const data =  await response.json();

                //update the state with the fetced users
                setUsers(data);
            }catch (error){
                // if there is an error, update the error state
                setError(error.message);
            }finally{
                //set loading to false once data fetching is complete
                setLoading(false);
            }
        };

        // call the fetch function

        fetchUsers();

    },[]);
    // Empty dependency array ensures the effect runs only once when the component mounts

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }

      return (
        <div>
          <h1>User List</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default UserList;

