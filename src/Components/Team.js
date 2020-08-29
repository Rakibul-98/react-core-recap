import React, { useState } from 'react';

const Team = (props) => {
    console.log(props.user)
    const {name,email,picture,gender,phone} = props.user
    const addMember=props.addMember
    const [mobile,setMobile] = useState(' ')

    const fullName =name.title + " " + name.first+" "+name.last
    const style={
        border : '2px solid white',
        margin : '10px',
        borderRadius :'5px',
        padding : '10px',
        display :'flex',
        width : '500px',
        height : '300px'

    }
    const imgStyle={
        width :'150px',
        height : '150px',
        margin: '20px'
    }

    const showPhone=()=> setMobile(phone)
    return (
        <div style= {style} >
            <div>
               <img style={imgStyle} src= {picture.large} alt=""/>
            </div>
            <div>
               <h2 className="text-warning"> {fullName} </h2>
               <h4> <span className="text-info">Gender : </span> {gender} </h4>
               <h6> <span className="text-primary">E-mail :</span> {email} </h6>
               <h5> <span className="text-success">Phone : </span> {mobile} </h5>
               <br/>
               <button onClick={showPhone} className="btn btn-warning">Show phone number</button>
               <button onClick={() => addMember(fullName)} className="btn btn-info"> Add me </button>
            </div>
        </div>
    );
};

export default Team;