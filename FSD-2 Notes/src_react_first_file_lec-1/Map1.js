// aim : 
// write a react code to render a component to display all the array elements 
// in h2 tag using map function 

function Map1(){
       const arr = [1,2,3,4,5] ; 
       return (
              <div>
                     <h1>Mapping</h1>
                     {
                     arr.map((value)=>{
                            return <h2>Array Element = {value}</h2>
                     })

              }
              </div>
       )
}
export default Map1 ; 