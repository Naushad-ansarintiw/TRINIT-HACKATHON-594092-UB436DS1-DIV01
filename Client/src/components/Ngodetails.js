import { React, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';


const NgoDetails = () => {

    const {id} = useParams();

    const history = useHistory();

    let details, setdetails;

    [details, setdetails] = useState({ location: "", previouswork: "", endgoal: "", plans: "", typeofngo: "", imageUrl: "" });

    const handleInputs = (e) => {
        console.log(e);

        //e.target.name whenever user input in the field the name of that field is stored in name variable
        let name = e.target.name;

        //e.target.name whenever user input in the field the value of that field is stored in value variable
        let value = e.target.value;

        setdetails({ ...details, [name]: value })

    }


    //for posting data to server 
    const postData = async (e) => {
        console.log(id);

        //this is for prevention page from loading on posting data or event occur
        e.preventDefault();

        //this is for storing data filled by user in input field
           moredatasubmit();

    }

    const moredatasubmit = async()=>{
        const { location, previouswork, endgoal, plans, typeofngo, imageUrl } = details;

        // this is for taking data from client side to server
        const res = await fetch(`http://localhost:5000/api/ngoworkdetails/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },

            // when we send data to server we have to change json into string
            body: JSON.stringify({
                location, previouswork, endgoal, plans, typeofngo, imageUrl
            })
        });

        //server in return of accepting or rejecting data send a response 
        const data = await res.json();
        console.log(data);

        if (data.status === 422 || !data) {
            window.alert("not sent")
        }


        else {
            window.alert("Details added Successfull");
            console.log("Details added Successfull");

            history.push("/login/ngo");
        }
    }





    return (
        <>
            <form onSubmit={postData}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="ngo">type of ngo</label>
                        <input type="text" name="typeofngo" class="form-control"
                            value={details.typeofngo}
                            onChange={handleInputs} id="ngo" placeholder="type of ngo" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="pwork">Previous work</label>
                        <input type="text" name="previouswork" class="form-control"
                            value={details.previouswork}
                            onChange={handleInputs}
                            id="pwork" placeholder="Previous work" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Location</label>
                    <input type="text" name="location" class="form-control"
                        value={details.location}
                        onChange={handleInputs}
                        id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="form-group">
                    <label for="inputAddress2">End Goal</label>
                    <input type="text" name="endgoal" class="form-control"
                        value={details.endgoal}
                        onChange={handleInputs}
                        id="inputAddress2" placeholder="End Goal" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="plans">Future Plans</label>
                        <input type="text" name="plans" class="form-control"
                            value={details.plans}
                            onChange={handleInputs}
                            id="plans" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="plans">Image URL</label>
                        <input type="text" name="imageUrl" class="form-control"
                            value={details.imageUrl}
                            onChange={handleInputs}
                            id="plans" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" >ADD DETAILS</button>
            </form>
        </>
    )
}

export default NgoDetails