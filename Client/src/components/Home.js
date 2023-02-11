import React from 'react'
import { useHistory } from 'react-router-dom'



function Home() {
  const history = useHistory();
  const phi = () => {
    history.push('/register1')
  }
  const ngo = () => {
    history.push('/register2')
  }


  return (
    <>
      <div className="container">
        <div className="card gap-3" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://media.istockphoto.com/id/466391556/vector/words-associated-with-philanthropy.jpg?s=612x612&w=0&k=20&c=pOX3YGOa4-3r5tsKJUuykAeQfJ3X93447ARFsMTEUeY=" alt="Card image cap" />
          <div className="card-body">
            <div>
              <button type="button" onClick={phi} class="btn btn-primary">Philanthropist</button>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://www.shutterstock.com/image-vector/ngo-nongovernmental-organization-word-cloud-260nw-1797442786.jpg" alt="Card image cap" />
          <div className="card-body">
            <div>
              <button type="button" class="btn btn-primary" onClick={ngo}>Ngo</button>
            </div>
          </div>
        </div>
      </div>



      <div>
        <img src="https://thumbs.dreamstime.com/b/ngo-letters-wood-background-stand-non-governmental-organization-59079824.jpg" style={{ width: "100%", height: "100%" }} alt="" />
      </div>
    </>
  )
}

export default Home