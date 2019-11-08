import React from 'react';

export default class ViewLinks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            links:[
                {
                  "id": 6,
                  "linkFor": "Change Password",
                  "code": "C_PASSWORD",
                  "url": "https://authorizationt.iso.com/auth/global/resetPwdForward.do",
                  "isActive": true,
                  "lastUpdatedOn": "2016-08-11T15:51:35.48-04:00",
                  "lastUpdatedBy": "I97001"
                },
                {
                  "id": 1,
                  "linkFor": "Contact Us",
                  "code": "CONTACT",
                  "url": "https://www.verisk.com/contact-verisk/",
                  "isActive": true,
                  "lastUpdatedOn": "2016-06-30T07:39:41.15-04:00",
                  "lastUpdatedBy": "I96998"
                },
                {
                  "id": 9,
                  "linkFor": "Forgot Password",
                  "code": "F_PASSWORD",
                  "url": "https://authorizationt.iso.com/auth/lostpassword/step1.action",
                  "isActive": true,
                  "lastUpdatedOn": "2016-06-30T07:39:41.15-04:00",
                  "lastUpdatedBy": "I96998"
                }]
        
        }
    }
    
    renderTableData() {
        return this.state.links.map((links, index) => {
           const { id, linkFor, code, url,lastUpdatedOn } = links //destructuring
           return (
              <tr key={id}>
                  <td>{id}</td>
                 <td>{linkFor}</td>
                 <td>{code}</td>
                 <td>{url}</td>
                 <td>{lastUpdatedOn}</td>
              </tr>
           )
        })
     }
  

    render(){
        return(

            <div>
                <table className="table">
                    <th>
                        <td>Id</td>
                        <td>LinkFor</td>
                        <td>Code</td>
                        <td>Url</td>
                        <td>Date</td>
                    </th>
                    <tr>
                        {this.renderTableData()}
                    </tr>
                </table>
            </div>

        );
    }
}