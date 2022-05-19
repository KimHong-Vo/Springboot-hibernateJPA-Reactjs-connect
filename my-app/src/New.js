import { useEffect, useState } from "react"
import { axios } from 'axios'

const New = () => {
    const [workspace, setWorkspace] = useState([]);
    // let name;
    // let des;
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    // });
    useEffect(() => {
        // Update the document title using the browser API
       
        const axios = require('axios');
        axios({
            method: 'get',  // defaut is get
            url: 'http://192.168.1.78:8080/hello',
            responseType: 'json',
            params: {   // data instead params when method isn't get
              name: 'Hong workspace'
            }
          }).then(function(response)  // response is passed automatically when receive response from server
                                        // see response format at https://axios-http.com/docs/res_schema
                {
                     //some code when success
                        // console.log("response data=" + response.data.name);
                    setWorkspace(response.data);
                }
            ).catch(function(error)
                {
                    //some code when run error
                    console.log("error:" + error);
                });
    });


    return (
        <div>
            <p>About your workspace</p>
            <p>Work space author: {workspace.name}</p>
            <p>Description: {workspace.description}</p>
        </div>
    )
}
export default New;