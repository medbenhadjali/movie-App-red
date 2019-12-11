import React from 'react'


export default function MinRate({rate, recupRate}) {
    // const change =(i)=>{

    //     this.props.recupRate(i);
    // }
        let tab =[]
        for(let i=0; i<5; i++)
        {
            if(i<rate)
            {tab.push(<span  key={i} onClick={()=>recupRate(i+1)}  >&#9733;</span>)}
            else{
                tab.push(<span onClick={()=>recupRate(i+1)} >&#9734;</span>)
            }
        }
    return (<div>{tab}</div>);
    }

    // 
    //
    // onClick={()=>recupRate(i+1)}
