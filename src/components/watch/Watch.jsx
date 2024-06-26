
const Watch = ({watch}) => {
    console.log(watch);
    const{name,id}=watch;
    return (
        <div>
           <h3>Watch: {name}</h3>
           <p>Price:{id}</p>
        </div>
    );
};

export default Watch;